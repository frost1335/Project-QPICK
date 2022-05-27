import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

import "./Catalog.scss";

const Catalog = (props) => {
  const shops = useSelector((state) => state.shops);
  const categories = useSelector((state) => state.categories);

  return props.menu ? (
    <>
      <div className="Catalog">
        <h3 className="catalog_header">Каталог</h3>
        <div className="catalog_body">
          <ul className="menu">
            <h3>Магазины</h3>
            {shops.length ? (
              shops.map((shop, idx) => (
                <Link to={"/shop/" + shop._id} className="menu_item" key={idx}>
                  <div className="item_img">
                    <img src={shop.img[0].thumbnail.path} alt={"item-img"} />
                  </div>
                  <p>{shop.name}</p>
                </Link>
              ))
            ) : (
              <Loader />
            )}
          </ul>
          <ul className="menu">
            <h3>Категории</h3>
            {categories.length ? (
              categories.map((ctg, idx) => (
                <Link
                  to={"/category/" + ctg._id}
                  className="menu_item"
                  key={idx}
                >
                  <div className="item_img">
                    <img src={ctg.img[0].thumbnail.path} alt={"item-img"} />
                  </div>
                  <p>{ctg.name}</p>
                </Link>
              ))
            ) : (
              <Loader />
            )}
          </ul>
        </div>
      </div>
    </>
  ) : null;
};

export default Catalog;
