import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from "../../../assets/banner1.png"
import banner2 from "../../../assets/banner2.png"
import banner3 from "../../../assets/banner3.png"
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="flex justify-center">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" autoplay loop>
        <SwiperSlide><img src={banner1} alt="banner-1" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="banner-2" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="banner-3" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Slider;
