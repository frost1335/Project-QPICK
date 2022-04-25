import React from "react";
import { FaTshirt } from "react-icons/fa";
import { GiShorts, GiBilledCap } from "react-icons/gi";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import "./CategorySlider.scss";
import { Tshirt } from "../../images";
import { Link } from "react-router-dom";

const category = [
  {
    img: FaTshirt,
    name: "T-shirt",
  },
  {
    img: GiShorts,
    name: "Shorts",
  },
  {
    img: GiBilledCap,
    name: "Cap",
  },
  {
    img: FaTshirt,
    name: "T-shirt",
  },
  {
    img: GiShorts,
    name: "Shorts",
  },
  {
    img: GiBilledCap,
    name: "Cap",
  },
];

const CategorySlider = () => {
  return (
    <div className="container">
      <div className="CategorySlider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {category.map((ctg, idx) => (
            <SwiperSlide key={idx}>
              <Link to="/" className="slide">
                <div className="slide_img">
                  <img src={Tshirt} alt="image_category" />
                </div>
                <p className="slide_name">{ctg.name}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
