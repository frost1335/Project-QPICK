import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBuy, getBuys } from "../../../actions";
import moment from "moment";

import "./Order.scss";

const formatter = new Intl.NumberFormat("uz-UZ", {
  style: "currency",
  currency: "UZS",
  maximumFractionDigits: 2,
});

const Order = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);

  const getProduct = (id) => {
    if (products.length) {
      return products.find((p) => p._id === id);
    }
  };

  const buys = useSelector((state) => state.buys);

  useEffect(() => {
    dispatch(getBuys());
  }, [dispatch]);

  const countAllPrice = (arr) => {
    let countArr = arr.map((a) => +getProduct(a).price);
    return countArr.reduce((a, b) => (a += b));
  };

  const onPhonedHandler = (id) => {
    dispatch(editBuy(id, { status: "phoned" }));
  };

  return (
    <div className="Order">
      <h2>Orders</h2>
      <div className="order_list">
        {buys.length && products.length
          ? buys
              .reverse()
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
                      <p>Date: {moment(+buy.data).format("MMMM Do YYYY")}</p>
                    </div>
                  </div>
                  <div className="item_products">
                    <h4>Products: </h4>
                    <div className="products_menu">
                      {buy.products.map((pdct, idx) => (
                        <div className="product_item" key={idx}>
                          <span>{getProduct(pdct).title}</span>
                          <span className="price">
                            {formatter.format(getProduct(pdct).price)}
                          </span>
                          <span>
                            {getProduct(pdct).count
                              ? getProduct(pdct).count
                              : 1}
                            x
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="item_end">
                    <h4>
                      Summary price:{" "}
                      <span>
                        {formatter.format(countAllPrice(buy.products))}
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
