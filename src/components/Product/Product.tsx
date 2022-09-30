import { Productvariant } from "./ProductVariants";
import starIcon from "images/star.png";
import styles from "./product.module.scss";

interface IProps {
  variant: Productvariant;
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

const Product = ({ data, variant }: IProps) => {
  return (
    <div className={styles.productWrapper}>
      <img className={styles.productImg} src={data.image} alt="product" />
      <div className={styles.infoWrapper}>
        {variant === Productvariant.PRODUCTWITHTWOCOUMNS && (
          <h3 className={styles[variant]}>{data.title}</h3>
        )}
        {variant === Productvariant.PRODUCTWITHFOURCOUMNS && (
          <h3 className={styles[variant]}>
            {data.title.length > 40
              ? `${data.title.slice(0, 40)}...`
              : data.title}
          </h3>
        )}
        <h4>price : {data.price}$</h4>
        <p>
          {Array(Math.floor(data.rating.rate))
            .fill(1)
            .map((item) => (
              <img key={Math.random() * 40} src={starIcon} width={30} alt="" />
            ))}
        </p>
      </div>
    </div>
  );
};

export default Product;
