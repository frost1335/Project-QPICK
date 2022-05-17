import React from "react";

import { useSelector } from "react-redux";
import { CartCard, Loader } from "../../components";

import "./CartView.scss";

const CartView = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="CartView">
      <div className="container">
        <h2>Корзина</h2>
        <div className="cart_body">
          <div className="body_left">
            {cart.length ? (
              cart.map((ctg, idx) => (
                <div className="cart_category" key={idx}>
                  <h3>{ctg.name}</h3>
                  <div className="category_row">
                    {ctg.products.map((pdct, index) => (
                      <CartCard key={index} product={pdct} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <Loader />
            )}
          </div>
          <div className="body_right">
            <div className="cart_buy">
              <span>
                104830 <b>сум</b>
              </span>
              <button>Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
