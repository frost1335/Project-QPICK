import React from "react";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Tshirt } from "../../images";

import "./Card.scss";

const Card = (props) => {
  let store = localStorage.getItem("favorite").split(",");
  const favoriteHandler = (id) => {
    if (store.includes(id)) {
      let newStore = store.filter((fid) => fid !== id);
      localStorage.setItem("favorite", newStore);
    } else {
      let newStore = store.push(id);
      localStorage.setItem("favorite", newStore);
    }
  };

  return (
    <Link className="Card_box" to={"/view/product/" + props.product._id}>
      <div className="Card">
        <div
          className={`favorite ${
            store.includes(props.product._id) ? "clicked" : "none"
          }`}
          onClick={favoriteHandler(props.product._id)}
        >
          <BiHeart />
        </div>
        <div className="card_image">
          <img src={Tshirt} alt={"image" + props.product.title} />
        </div>
        <p>{props.product.title} </p>
        <span>
          {props.product.price}
          <span className="price_cur">сум</span>
        </span>
        <div className="shop">
          <Link to={"/api/shop/" + props.product.shopInfo._id}>
            <div className="shop_image">
              <img src={props.product.shopInfo.img} alt={"Shop"} />
            </div>
            <span>{props.product.shopInfo.name}</span>
          </Link>
          <Link to={"/api/category/" + props.product.categoryID}>
            <span className="categoryLink">{props.category.name}</span>
          </Link>
        </div>
        <div className="buy">
          <Link to="/buy">Купить</Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
