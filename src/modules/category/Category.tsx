import Product from "components/Product/Product";
import { Productvariant } from "components/Product/ProductVariants";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./catgories.module.scss";

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

const Category = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState<IApiData[]>();

  const getData = useCallback(async () => {
    const jsonData = await fetch(
      `${process.env.REACT_APP_API}/products/category/${categoryName}`
    );
    const data = await jsonData.json();
    setData(data);
    console.log(data);
  }, [categoryName]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className={styles.categoriesWrapper}>
      {data?.map((item: IApiData) => (
        <div className={styles.productWrapper}>
          <Product variant={Productvariant.PRODUCTWITHTWOCOUMNS} data={item} />
        </div>
      ))}
    </div>
  );
};

export default Category;
