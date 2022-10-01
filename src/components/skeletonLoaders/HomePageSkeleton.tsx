// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./HomepageSkeleton.module.scss";

const HomePageSkeleton = () => {
  return (
    <div className={styles.container}>
      <h1>Loading...</h1>
      {/* <SkeletonTheme baseColor="skyblue" highlightColor="white"> */}
      {/* <p>
        <Skeleton count={3} duration={4} />
      </p> */}
      {/* </SkeletonTheme> */}
    </div>
  );
};

export default HomePageSkeleton;
