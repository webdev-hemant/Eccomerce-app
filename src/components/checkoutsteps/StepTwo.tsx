import { useNavigate } from "react-router-dom";
import creditCardImg from "images/creditcard.png";
import paypalIcon from "images/paypalicon.png";
import smallcart from "images/smallcart.png";
import paypalWithName from "images/paypalwithname.png";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { GlobalCtx } from "context/GlobalContextProvider";
import styles from "./steptwo.module.scss";

let timeOut: NodeJS.Timeout;

const StepTwo = () => {
  const navigate = useNavigate();
  const { state, reducerDispatch } = useContext(GlobalCtx);
  const handlePayNow = () => {
    clearTimeout(timeOut);
    toast.success("Payment Successful!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      // pauseOnHover: true,
      draggable: true,
    });
    reducerDispatch({ type: "emtyCart" });
    timeOut = setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className={styles.steptwoContainer}>
      <div className={styles.paypalPaymentContainer}>
        <div className={styles.payNowWrapper}>
          <div className={styles.paypalHeading}>
            <div className={styles.payImageWrapper}>
              <img src={paypalWithName} alt="" />
            </div>
            <div className={styles.cartTotal}>
              <img src={smallcart} alt="" />
              <p className={styles.price}>${state?.totalCost}</p>
            </div>
          </div>
          <h6 className={styles.welcomeText}>
            Welcome back, {localStorage.getItem("userName")}
          </h6>
          <h4 style={{ fontSize: "1.2rem" }}>Pay with</h4>
          <div className={styles.paypalBalance}>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <img
                style={{ objectFit: "contain" }}
                width={20}
                src={paypalIcon}
                alt=""
              />
              <p>PayPal Balance</p>
            </div>
            <p>$0 USD</p>
          </div>
          <h3 style={{ textAlign: "end", marginTop: "3rem" }}>
            Total: ${state?.totalCost}
          </h3>
          <button
            onClick={() => handlePayNow()}
            style={{
              margin: "2rem 0",
              width: "100%",
              padding: "0.6rem 0",
              fontSize: "1rem",
              cursor: "pointer",
              color: "#fff",
              border: "1.5px solid lightgray",
              backgroundColor: "rgb(73, 158, 255)",
            }}
          >
            Pay Now
          </button>
        </div>
        <div className={styles.saferWrapper}>
          <div className={styles.imgWrappr}>
            <img src={creditCardImg} alt="" />
          </div>
          <p className={styles.saferText}>
            Paypal is the safer easier way to pay
          </p>
          <p className={styles.saferTextTwo}>
            No matter where you shop, we keep your financial information secure.
          </p>
        </div>
      </div>
      <div className={styles.semiFooterWrapper}>
        <p
          onClick={() => navigate("?step=1")}
          className={styles.cancelReturnParagraph}
        >
          Cancel and return to step one
        </p>
        <ul className={styles.policyWrapper}>
          {[
            "Policies",
            "Terms",
            "Privacy",
            "Feedback",
            `1999 - ${new Date().getFullYear()}`,
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default StepTwo;
