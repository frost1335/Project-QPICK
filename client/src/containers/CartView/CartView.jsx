import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../actions";
import { BuyModal, CartCard, Loader } from "../../components";

import "./CartView.scss";

function countPrice(arr) {
  let price = [];
  arr.map((ctg) =>
    ctg.products.map((pdct) => {
      pdct.count = +localStorage.getItem(`${pdct._id}-cart`).split(",")[1];
      return price.push({
        price: pdct.price,
        count: +localStorage.getItem(`${pdct._id}-cart`).split(",")[1],
      });
    })
  );
  return price.reduce((a, b) => (a += +b.price * b.count), 0);
}

const CartView = () => {
  const cart = useSelector((state) => state.cart);
  const [onBuy, setOnBuy] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  return (
    <div className="CartView">
      {onBuy ? <BuyModal products={cart} setOnBuy={setOnBuy} id={""} /> : null}
      <div className="container">
        <h2>Корзина</h2>
        <div className="cart_body">
          <div className="body_left">
            {cart.length ? (
              cart.map((ctg, idx) => (
                <div className="cart_category" key={idx}>
                  <h3>{ctg.name}</h3>
                  <div className="category_row">
                    {ctg.products.map((pdct, index) => {
                      return <CartCard key={index} product={pdct} />;
                    })}
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
                {cart.length ? `${countPrice(cart)}` : "0"}
                <b>сум</b>
              </span>
              <button onClick={() => setOnBuy(true)}>Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
