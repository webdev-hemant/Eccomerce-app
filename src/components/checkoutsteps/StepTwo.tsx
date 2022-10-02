import { useNavigate } from "react-router-dom";
import creditCardImg from "images/creditcard.png";
import paypalIcon from "images/paypalicon.png";
import smallcart from "images/smallcart.png";
import paypalWithName from "images/paypalwithname.png";
import styles from "./steptwo.module.scss";

const StepTwo = () => {
  const navigate = useNavigate();
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
              <p className={styles.price}>
                $
                {JSON.parse(localStorage.getItem("cartData") || "")
                  ?.totalCost || 0}
              </p>
            </div>
          </div>
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
    </div>
  );
};

export default StepTwo;
