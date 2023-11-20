import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="flex justify-center">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" autoplay loop>
        <SwiperSlide><img src="https://secretraffle4u.com/assets/images/frontend/banner/64ce030453d241691222788.png" alt="banner-1" /></SwiperSlide>
        <SwiperSlide><img src="https://secretraffle4u.com/assets/images/frontend/banner/64ce0303b92701691222787.png" alt="banner-2" /></SwiperSlide>
        <SwiperSlide><img src="https://secretraffle4u.com/assets/images/frontend/banner/64ce0304272161691222788.png" alt="banner-3" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Slider;
