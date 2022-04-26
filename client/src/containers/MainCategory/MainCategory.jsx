import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

import "./MainCategory.scss";

const MainCategory = () => {
  const accessory = useSelector((state) => state.accessory);

  return (
    <div className="container">
      <div className="MainCategory">
        {accessory.data
          ? accessory.data.map((ctg, index) => (
              <div className="main_category" key={index}>
                <h3>{ctg.name}</h3>
                <div className="main_products">
                  {ctg.products.map((pdct, idx) => (
                    <div className="main_box" key={idx}>
                      <Link to="/">
                        <div className="main_card">
                          <Link to="/bi">
                            <div className="favorite">
                              <BiHeart />
                            </div>
                          </Link>
                          <div className="card_image">
                            <img src={pdct.img} alt={"image" + pdct.title} />
                          </div>
                          <p>{pdct.title} </p>
                          <span>
                            {pdct.price} <span className="price_cup">сум</span>
                          </span>
                          <div className="buy">
                            <Link to="/buy">Купить</Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default MainCategory;
