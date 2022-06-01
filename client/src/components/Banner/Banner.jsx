import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../actions";
import { PROXY_URL } from "../../constants/actionTypes";

import "./Banner.scss";

const Banner = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  const banners = useSelector((state) => state.banners);

  return (
    <div className="container">
      <div className="Banner">
        {banners.map((bnr, idx) => (
          <div className="banner_card" key={idx}>
            <img
              src={PROXY_URL + bnr.img[0].original.path}
              alt={"img-" + bnr.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
