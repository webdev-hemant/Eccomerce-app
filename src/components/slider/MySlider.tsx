import { Carousel } from "react-responsive-carousel";
import styles from "./myslider.module.scss";

interface IProps {
  sliderData: {
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
  }[];
}

const MySlider = (props: IProps) => {
  const { sliderData } = props;
  console.log(sliderData);

  return (
    <div className={styles.carouselWrapper}>
      <Carousel swipeable autoPlay infiniteLoop showIndicators={false}>
        {sliderData?.map((item) => (
          <div className={styles.innerCarousel} key={item.title}>
            <img alt="" src={item.image} />
            <p className={`legend ${styles.legendSelect}`}>{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MySlider;
