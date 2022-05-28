import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CgClose } from "react-icons/cg";

import "./CartCard.scss";

const formatter = new Intl.NumberFormat("uz-UZ", {
  style: "currency",
  currency: "UZS",
  maximumFractionDigits: 2,
});

const CartCard = (props) => {
  const [count, setCount] = useState(
    localStorage.getItem(`${props.product._id}-cart`)
      ? localStorage.getItem(`${props.product._id}-cart`).split(",")[1]
      : null
  );
  const cartHandler = (id, sym) => {
    let product = localStorage.getItem(`${id}-cart`).split(",");
    if (sym === "-") {
      if (+product[1] === 1) {
        return;
      } else {
        product[1] = +product[1] - 1;
        setCount(+count - 1);
      }
    } else {
      product[1] = +product[1] + 1;
      setCount(+count + 1);
    }

    props.editProductCount(...product);

    localStorage.setItem(`${id}-cart`, product.join(","));
  };

  const deleteHandler = () => {
    const card = document.getElementById(`CartCard-${props.product._id}`);
    card.remove();
    localStorage.removeItem(`${props.product._id}-cart`);
  };
  return (
    <div className="CartCard" id={`CartCard-${props.product._id}`}>
      <div className="card_img">
        <img src={props.product.img[0].thumbnail.path} alt="cart-product-img" />
      </div>
      <div className="card_info">
        <p className="card_title">{props.product.title}</p>
        <Link to={"/shop/view/" + props.product.shopID}>Shop</Link>
      </div>
      <div className="card_counter">
        <button onClick={() => cartHandler(props.product._id, "-")}>-</button>
        <span>{count}</span>
        <button onClick={() => cartHandler(props.product._id, "+")}>+</button>
      </div>
      <div className="card_price">{formatter.format(props.product.price)}</div>
      <div className="remove_btn">
        <button onClick={deleteHandler}>
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
