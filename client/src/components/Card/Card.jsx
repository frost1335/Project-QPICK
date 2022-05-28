import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { BiHeart } from "react-icons/bi";
import { IoMdHeart } from "react-icons/io";

import "./Card.scss";
import Rating from "@material-ui/lab/Rating";

const formatter = new Intl.NumberFormat("uz-UZ", {
  style: "currency",
  currency: "UZS",
  maximumFractionDigits: 2,
});

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
        <Link to={"/view/product/" + props.product._id} className={'Card_link'}>
          <div className="card_image">
            <img
              src={props.product.img[0].medium.path}
              alt={"image" + props.product.title}
            />
          </div>
          <p>{props.product.title} </p>
          <span className="price">{formatter.format(props.product.price)}</span>
          <h5>
            <Rating
              style={{ marginTop: 10 }}
              value={props.product.rating}
              name="product-rating"
              precision={0.5}
              readOnly
              size="medium"
            />
          </h5>
          <div className="shop">
            <Link to={"/shop/" + props.product.shopInfo._id}>
              <div className="shop_image">
                <img
                  src={props.product.shopInfo.img[0].thumbnail.path}
                  alt={"Shop"}
                />
              </div>
              <span>{props.product.shopInfo.name}</span>
            </Link>
            <Link to={"/category/" + props.product.categoryID}>
              <span className="categoryLink">
                {props.product.categoryInfo.name}
              </span>
            </Link>
          </div>
          <div className="buy">
            <Link
              to={`${
                window.location.pathname === "/"
                  ? window.location.pathname
                  : window.location.pathname + "/"
              }buy/${props.product._id}`}
            >
              Купить
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
