import React from "react";
import { useSelector } from "react-redux";

import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./MainCategory.scss";
// import required modules
import { Navigation } from "swiper";
import Card from "../../components/Card/Card";

const MainCategory = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <div className="MainCategory">
        {products.data
          ? products.data.map((ctg, index) =>
              ctg.products.length > 0 ? (
                <div className="main_category" key={index}>
                  <h3>{ctg.name}</h3>
                  <div className="main_products">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      modules={[Navigation]}
                      navigation={true}
                      className="mySwiper"
                    >
                      {ctg.products.map((pdct, idx) => (
                        <SwiperSlide key={idx}>
                          <Card product={pdct} category={ctg} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              ) : null
            )
          : null}
      </div>
    </div>
  );
};

export default MainCategory;
