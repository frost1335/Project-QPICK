import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBanners } from "../../actions";

import "./Banner.scss";

const Banner = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  const banners = useSelector((state) => state.banners);

  console.log(banners);

  return (
    <div className="container">
      <div className="Banner">
        {banners.map((bnr, idx) => (
          <div className="banner_card" key={idx}>
            <img src={bnr.img[0].original.path} alt={"img-" + bnr.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
