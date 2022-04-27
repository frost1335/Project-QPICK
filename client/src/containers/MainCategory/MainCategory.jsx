import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./MainCategory.scss";
// import required modules
import { Pagination, Navigation } from "swiper";

const MainCategory = () => {
  const accessory = useSelector((state) => state.accessory);

  return (
    <div className="container">
      <div className="MainCategory">
        {accessory.data
          ? accessory.data.map((ctg, index) =>
              ctg.products.length > 0 ? (
                <div className="main_category" key={index}>
                  <h3>{ctg.name}</h3>
                  <div className="main_products">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      modules={[Navigation]}
                      navigation={true}
                      className="mySwiper"
                    >
                      {ctg.products.map((pdct, idx) => (
                        <SwiperSlide className="main_box" key={idx}>
                          <Link to={"/api/product/" + pdct._id}>
                            <div className="main_card">
                              <Link to="/bi">
                                <div className="favorite">
                                  <BiHeart />
                                </div>
                              </Link>
                              <div className="card_image">
                                <img
                                  src={pdct.img}
                                  alt={"image" + pdct.title}
                                />
                              </div>
                              <p>{pdct.title} </p>
                              <span>
                                {pdct.price}{" "}
                                <span className="price_cup">сум</span>
                              </span>
                              <div className="buy">
                                <Link to="/buy">Купить</Link>
                              </div>
                            </div>
                          </Link>
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
