import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tshirt } from "../../images";

import { BiHeart } from "react-icons/bi";
import { IoMdHeart } from "react-icons/io";

import "./Card.scss";

const Card = (props) => {
  useEffect(() => {
    const like = document.getElementById(`${props.product._id}-favorite2`);
    const unlike = document.getElementById(`${props.product._id}-favorite1`);
    if (!!localStorage.getItem(`${props.product._id}-favorite`)) {
      unlike.style.display = "flex";
      like.style.display = "none";
    } else {
      unlike.style.display = "none";
      like.style.display = "flex";
    }
  }, [props]);

  const favoriteHandler = (id) => {
    const unlike = document.getElementById(`${id}-favorite1`);
    const like = document.getElementById(`${id}-favorite2`);
    if (!!localStorage.getItem(`${id}-favorite`)) {
      localStorage.removeItem(`${id}-favorite`);
      unlike.style.display = "none";
      like.style.display = "flex";
    } else {
      localStorage.setItem(`${id}-favorite`, id);
      unlike.style.display = "flex";
      like.style.display = "none";
    }
  };

  return (
    <div className="Card_box">
      <div className="Card">
        <div
          className="favorite"
          id={`${props.product._id}-favorite1`}
          onClick={() => favoriteHandler(props.product._id)}
        >
          <IoMdHeart />
        </div>
        <div
          className="favorite"
          id={`${props.product._id}-favorite2`}
          onClick={() => favoriteHandler(props.product._id)}
        >
          <BiHeart />
        </div>
        <div className="card_image">
          <img src={props.product.img} alt={"image" + props.product.title} />
        </div>
        <Link to={"/view/product/" + props.product._id}>
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
        </Link>
      </div>
    </div>
  );
};

export default Card;
