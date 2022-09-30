import { Productvariant } from "./ProductVariants";
import starIcon from "images/star.png";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${data?.id}`)}
      className={styles.productWrapper}
    >
      <img className={styles.productImg} src={data?.image} alt="product" />
      <div className={styles.infoWrapper}>
        {variant === Productvariant.PRODUCTWITHTWOCOUMNS && (
          <h3 className={styles[variant]}>{data?.title}</h3>
        )}
        {variant === Productvariant.PRODUCTWITHFOURCOUMNS && (
          <h3 className={styles[variant]}>
            {data?.title?.length > 40
              ? `${data?.title?.slice(0, 40)}...`
              : data?.title}
          </h3>
        )}
        <h4>price : {data?.price}$</h4>
        <p>
          {Array(Math.floor(data?.rating?.rate || 0))
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
