import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Swiper Slider components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Slider css
import "swiper/css";
import "swiper/css/pagination";
import "./SimilarProducts.scss";

import { Card, Loader } from "../../components";
import { useParams } from "react-router-dom";
import { getSimilarProducts } from "../../actions";

const SimilarProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const categorys = useSelector((state) => state.categories);
  const similarProducts = useSelector((state) => state.similarProducts);

  useEffect(() => {
    dispatch(getSimilarProducts(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="SimilarProducts">
        <h3>Похожие товары: </h3>
        <div className="products">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={true}
            className="mySwiper"
          >
            {similarProducts.length && categorys.length ? (
              similarProducts.map((pdct, idx) => (
                <SwiperSlide key={idx}>
                  <Card product={pdct} />
                </SwiperSlide>
              ))
            ) : (
              <Loader />
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
