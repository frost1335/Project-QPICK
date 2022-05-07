import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../actions/cart";
import { Loader } from "../../components";

import "./CartView.scss";

const CartView = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  console.log(cart);

  return (
    <div className="container">
      <div className="CartView">
        <h2>Корзина</h2>
        <div className="cart_body">
          {cart.length ? (
            cart.map((ctg, idx) => (
              <div className="cart_category" key={idx}>
                <h3>{ctg.name}</h3>
                <div className="category_row">
                  {ctg.products.map((pdct, index) => (
                    <div className="cart_card" key={index}>
                      <img src={pdct.img} alt="product-img" />
                      <p>{pdct.title}</p>
                      <h4>{pdct.price}</h4>
                      <p>{pdct.description}</p>
                    </div>
                  ))}
                </div>
                <hr />
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartView;
