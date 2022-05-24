import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBuy, getBuys } from "../../../actions";

import "./Order.scss";

const Order = () => {
  const dispatch = useDispatch();

  const buys = useSelector((state) => state.buys);

  useEffect(() => {
    dispatch(getBuys());
  }, [dispatch]);

  const countAllPrice = (arr) => {
    let countArr = arr.map((a) => +a.price);
    return countArr.reduce((a, b) => (a += b));
  };

  const onPhonedHandler = (id) => {
    dispatch(editBuy(id, { status: "phoned" }));
  };

  return (
    <div className="Order">
      <h2>Orders</h2>
      <div className="order_list">
        {buys.length
          ? buys
              .filter((b) => b.status === "bought")
              .map((buy, index) => (
                <div className="order_item" key={index}>
                  <div className="item_header">
                    <div>
                      <h4>
                        Name: <span>{buy.name}</span>
                      </h4>
                      <h4>
                        Surename: <span>{buy.surename}</span>
                      </h4>
                      <a href={`tel:${buy.phone}`}>
                        Phone number: <span>{buy.phone}</span>
                      </a>
                    </div>
                    <div>
                      <p>data: {buy.data}</p>
                    </div>
                  </div>
                  <div className="item_products">
                    <h4>Products: </h4>
                    <div className="products_menu">
                      {buy.products.map((pdct, idx) => (
                        <div className="product_item" key={idx}>
                          <span>{pdct.title}</span>
                          <span className="price">{pdct.price}сум</span>
                          <span>{pdct.count ? pdct.count : 1}x</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="item_end">
                    <h4>
                      Summary price:{" "}
                      <span>
                        {countAllPrice(buy.products)}
                        <span className="currency">сум</span>
                      </span>
                    </h4>
                  </div>
                  <div className="item_button">
                    <button onClick={() => onPhonedHandler(buy._id)}>
                      Связано
                    </button>
                  </div>
                </div>
              ))
          : null}
      </div>
    </div>
  );
};

export default Order;
