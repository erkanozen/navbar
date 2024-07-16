import { Swiper } from "swiper/react";

const SwiperComponent = ({ children, ...props }) => {
  return <Swiper {...props}>{children}</Swiper>;
};

export default SwiperComponent;
