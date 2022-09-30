// import HomePageSkeleton from "components/skeletonLoaders/HomePageSkeleton";
import React, { useCallback, useEffect, useState } from "react";
import MyModal from "components/Modal/MyModal";
import MySlider from "components/slider/MySlider";
import Product from "components/Product/Product";
import styles from "./home.module.scss";

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

const Home = () => {
  const [apiData, setApiData] = useState<IApiData[]>([]);

  const getData = useCallback(async () => {
    if (localStorage.getItem("jsonData")) {
      const datafromLocalstorage = await JSON.parse(
        localStorage.getItem("jsonData") || ""
      );
      setApiData(datafromLocalstorage);
    } else {
      const jsonData = await fetch(`${process.env.REACT_APP_API}/products`);
      const data = await jsonData.json();
      localStorage.setItem("jsonData", JSON.stringify(data));
      setApiData(data);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className={styles.homeWrapper}>
      <MySlider sliderData={apiData} />
      <div className={styles.secondSection}>
        {apiData?.slice(3, 7).map((item) => (
          <Product key={item.title} data={item} />
        ))}
      </div>
      <div className={styles.thirdSection}>
        {apiData?.slice(10, 18).map((item) => (
          <Product key={item.title} data={item} />
        ))}
      </div>
      <MyModal open={false}>
        <h1>This is modal</h1>
      </MyModal>
    </div>
  );
};

export default React.memo(Home);
