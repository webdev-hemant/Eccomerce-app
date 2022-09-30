// import HomePageSkeleton from "components/skeletonLoaders/HomePageSkeleton";

import MyModal from "components/Modal/MyModal";
import MySlider from "components/slider/MySlider";
import { useCallback, useEffect, useState } from "react";

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
    const jsonData = await fetch(`${process.env.REACT_APP_API}/products`);
    const data = await jsonData.json();
    setApiData(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      <MySlider sliderData={apiData} />
      {/* <HomePageSkeleton /> */}
      <MyModal open={false}>
        <h1>This is modal</h1>
      </MyModal>
    </div>
  );
};

export default Home;
