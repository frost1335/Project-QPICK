import React from "react";
import { Link } from "react-router-dom";

import { banner } from "../../images";
import "./Banner.scss";

const banners = [
  {
    image: banner,
    link: "/asdasdsad",
  },
  {
    image: banner,
    link: "/asdasdsad",
  },
  {
    image: banner,
    link: "/asdasdsad",
  },
];

const Banner = () => {
  return (
    <div className="container">
      <div className="Banner">
        {banners.map((bnr, idx) => (
          <Link to={bnr.link}>
            <div className="banner_card">
              <img src={bnr.image} alt={"img-" + bnr.image} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Banner;
