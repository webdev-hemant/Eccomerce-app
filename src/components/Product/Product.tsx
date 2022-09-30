import styles from "./product.module.scss";

interface IProps {
  data: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

const Product = ({ data }: IProps) => {
  return (
    <div className={styles.productWrapper}>
      <img className={styles.productImg} src={data.image} alt="product Image" />
      <div className={styles.infoWrapper}>
        <h3 className={styles.productTitle}>{data.title}</h3>
        <h4>price : {data.price}$</h4>
        {/* <h5>{data.description}</h5> */}
      </div>
    </div>
  );
};

export default Product;
