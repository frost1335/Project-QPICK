import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { slide } from "../../images";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.scss";

import { Pagination, Navigation, Autoplay } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getSliders } from "../../actions";

const arr = [slide, slide, slide, slide, slide, slide, slide];

const Slider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliders());
  }, [dispatch]);

  const sliders = useSelector((state) => state.sliders);

  return (
    <div className="container">
      <div className="Slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            disableOnInteraction: false,
            delay: 3000,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {sliders.map((slider, idx) => (
            <SwiperSlide className="slide" key={idx}>
              <img src={slider.img[0].original.path} alt="slide_img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
