import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  // console.log(sliderData);

  return (
    <div className={styles.carouselWrapper}>
      <Carousel swipeable autoPlay infiniteLoop showIndicators={false}>
        {sliderData?.map((item) => (
          <div
            onClick={() => navigate(`/products/${item?.id}`)}
            className={styles.innerCarousel}
            key={item.title}
          >
            <img alt="" src={item.image} />
            <p className={`legend ${styles.legendSelect}`}>{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MySlider;
