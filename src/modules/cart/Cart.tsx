import styles from "./cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.cartWrapper}>
      <div className={styles.productInformation}></div>
      <div className={styles.cartContainer}>
        <div className={styles.cartTotal}>
          <h3 className={styles.title}>Order summery</h3>
          <div className={styles.discount}>
            <h4>Discount 10%</h4>
            <h5>Exchange offer</h5>
          </div>
          <div className={styles.priceTotal}>
            <h4>Total</h4> <h5>$ 400.99</h5>
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
