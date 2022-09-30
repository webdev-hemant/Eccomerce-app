import { GlobalCtx } from "context/GlobalContextProvider";
import { useContext, useEffect, useState } from "react";
import styles from "./cart.module.scss";

const Cart = () => {
  const [totalValue, setTotalValue] = useState<number>(0);
  const { reducerDispatch, state } = useContext(GlobalCtx);

  useEffect(() => {
    const total = state?.cartItems?.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
    setTotalValue(total);
  }, [state?.cartItems]);

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.productInformation}>
        {state?.cartItems?.map((item) => (
          <div key={item.title} className={styles.cartArrayContainer}>
            <div className={styles.imgContainer}>
              <img src={item.image} alt="" />
            </div>
            <div className={styles.details}>
              <h5>{item.title}</h5>
              <h6>price: ${item.price}</h6>
            </div>
            <button
              onClick={() =>
                reducerDispatch({ type: "removeFromCart", newStateData: item })
              }
              type="button"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className={styles.cartCheckoutContainer}>
        <div className={styles.cartTotal}>
          <h3 className={styles.title}>Order summery</h3>
          <div className={styles.discount}>
            <h4>Discount 10%</h4>
            <h5>Exchange offer</h5>
          </div>
          <div className={styles.priceTotal}>
            <h4>Total</h4> <h5>$ {totalValue}</h5>
          </div>
          <button className={styles.proceed} type="button">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
