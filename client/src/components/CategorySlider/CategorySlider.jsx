import React from "react";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import "./CategorySlider.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const CategorySlider = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="container">
      <div className="CategorySlider">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          slidesPerGroup={1}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.length ? (
            categories.map((ctg, idx) => (
              <SwiperSlide key={idx}>
                <Link to={"/category/" + ctg._id} className="slide">
                  <div className="slide_img">
                    <img src={ctg.img[0].medium.path} alt="image_category" />
                  </div>
                  <p className="slide_name">{ctg.name}</p>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <Loader />
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
