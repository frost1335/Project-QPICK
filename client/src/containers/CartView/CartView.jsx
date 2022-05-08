import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../actions/cart";
import { CartCard, Loader } from "../../components";

import "./CartView.scss";

const CartView = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  console.log();

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
