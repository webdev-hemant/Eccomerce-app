import img404 from "images/404error.png";
import styles from "./notfound.module.scss";

const Notfound = () => {
  return (
    <div className={styles.img404Wrapper}>
      <img src={img404} alt="" />
    </div>
  );
};

export default Notfound;
