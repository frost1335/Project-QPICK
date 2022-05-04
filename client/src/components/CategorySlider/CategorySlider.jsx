import React from "react";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import "./CategorySlider.scss";
import { Tshirt } from "../../images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const CategorySlider = () => {
  const categories = useSelector((state) => state.categories.data);

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
          {categories ? (
            categories.map((ctg, idx) => (
              <SwiperSlide key={idx}>
                <Link to={"/api/category/" + ctg._id} className="slide">
                  <div className="slide_img">
                    <img src={Tshirt} alt="image_category" />
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
