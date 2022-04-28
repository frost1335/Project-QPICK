import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

import { Tshirt } from "../../images";

import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./MainCategory.scss";
// import required modules
import { Navigation } from "swiper";

const MainCategory = () => {
  const accessory = useSelector((state) => state.products);

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
                          <Link to={"/view/product/" + pdct._id}>
                            <div className="main_card">
                              <Link to="/bi">
                                <div className="favorite">
                                  <BiHeart />
                                </div>
                              </Link>
                              <div className="card_image">
                                <img src={Tshirt} alt={"image" + pdct.title} />
                              </div>
                              <p>{pdct.title} </p>
                              <span>
                                {pdct.price}
                                <span className="price_cur">сум</span>
                              </span>
                              <div className="shop">
                                <Link to={"/api/shop/" + pdct.shopInfo._id}>
                                  <div className="shop_image">
                                    <img src={pdct.shopInfo.img} alt={"Shop"} />
                                  </div>
                                  <span>{pdct.shopInfo.name}</span>
                                </Link>
                                <Link to={"/api/category/" + pdct.categoryID}>
                                  <span className="categoryLink">
                                    {ctg.name}
                                  </span>
                                </Link>
                              </div>
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
