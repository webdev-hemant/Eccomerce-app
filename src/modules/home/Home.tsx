import React, { useCallback, useEffect, useState } from "react";
import MyModal from "components/Modal/MyModal";
import MySlider from "components/slider/MySlider";
import Product from "components/Product/Product";
import { Productvariant } from "components/Product/ProductVariants";
import OutsideClickHandler from "react-outside-click-handler";
import welcomeImage from "images/welcome.png";
import greetingThumb from "images/greetingthumb.png";
import sadfaceImage from "images/sadface.png";
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
  const [isOpenmodal, setIsOpenmodal] = useState<boolean>(false);

  const getData = useCallback(async () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      if (!localStorage.getItem("isModalClosed")) {
        document.body.style.overflow = "hidden";
        setIsOpenmodal(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleCloseModal = () => {
    document.body.style.overflow = "unset";
    localStorage.setItem("isModalClosed", "true");
    setIsOpenmodal(false);
  };

  return (
    <div className={styles.homeWrapper}>
      <MySlider sliderData={apiData} />
      <div className={styles.secondSection}>
        {apiData?.slice(3, 7).map((item: IApiData) => (
          <Product
            variant={Productvariant.PRODUCTWITHTWOCOUMNS}
            key={item.title}
            data={item}
          />
        ))}
      </div>
      <div className={styles.thirdSection}>
        {apiData?.slice(10, 18).map((item: IApiData) => (
          <Product
            variant={Productvariant.PRODUCTWITHFOURCOUMNS}
            key={item.title}
            data={item}
          />
        ))}
      </div>
      <MyModal open={isOpenmodal}>
        <div className={styles.welcomeModalContainer}>
          <OutsideClickHandler onOutsideClick={() => handleCloseModal()}>
            <div className={styles.modalWrapper}>
              <div className={styles.imgWrapper}>
                <img src={welcomeImage} alt="" />
              </div>
              <h2>How are you {localStorage.getItem("userName")} ?</h2>
              <div className={styles.greetingWrapper}>
                <div
                  onClick={() => handleCloseModal()}
                  className={styles.iamGood}
                >
                  <img src={greetingThumb} alt="" />
                  <h4> I'm good!</h4>
                </div>
                <div
                  onClick={() => handleCloseModal()}
                  className={styles.regularDay}
                >
                  <img src={sadfaceImage} alt="" />
                  <h4>Just regular day!</h4>
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      </MyModal>
    </div>
  );
};

export default React.memo(Home);
