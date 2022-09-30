import { GlobalCtx } from "context/GlobalContextProvider";
import starIcon from "images/star.png";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styles from "./productDetails.module.scss";

interface IApiData {
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
}

const ProductDetails = () => {
  const [apiData, setApiData] = useState<IApiData>({} as IApiData);
  const { productId } = useParams();
  const { reducerDispatch } = useContext(GlobalCtx);

  const getData = useCallback(async () => {
    try {
      const jsonData = await fetch(
        `${process.env.REACT_APP_API}/products/${productId}`
      );
      const data = await jsonData.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
    }
  }, [productId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className={styles.productDetails}>
      <div className={styles.imgContainer}>
        <img src={apiData?.image} alt="" />
      </div>
      <div className={styles.infoWrapper}>
        <h2 className={styles.title}>{apiData?.title}</h2>
        <h3 className={styles.category}>Category: {apiData?.category}</h3>
        <p className={styles.description}>{apiData?.description}</p>
        <div className={styles.starPrice}>
          <div>
            {Array(Math.floor(apiData?.rating?.rate || 0))
              .fill(1)
              .map((item) => (
                <img
                  key={Math.random() * 40}
                  src={starIcon}
                  width={30}
                  alt=""
                />
              ))}
          </div>
          <div className={styles.productPrice}>Price : ${apiData?.price}</div>
        </div>
        <button
          className={styles.addToCategory}
          onClick={() => {
            reducerDispatch({ type: "addToCart", newStateData: apiData });
            toast.success(`${apiData?.title} added to Cart!`, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }}
          type="button"
        >
          Add to cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
