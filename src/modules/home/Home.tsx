// import HomePageSkeleton from "components/skeletonLoaders/HomePageSkeleton";

import MyModal from "components/Modal/MyModal";

const Home = () => {
  return (
    <div>
      Home
      {/* <HomePageSkeleton /> */}
      <MyModal open>
        <h1>This is modal</h1>
      </MyModal>
    </div>
  );
};

export default Home;
