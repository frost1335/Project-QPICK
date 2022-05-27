import Rating from "@material-ui/lab/Rating";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBuy, editProduct, editProducts, getBuys } from "../../actions";
import { RangeSlider } from "../../components";

import "./VotesView.scss";

const formatter = new Intl.NumberFormat("uz-UZ", {
  style: "currency",
  currency: "UZS",
  maximumFractionDigits: 2,
});

const VotesView = () => {
  const dispatch = useDispatch();
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    dispatch(getBuys());
  }, [dispatch]);

  const products = useSelector((state) => state.product);

  const buys = useSelector((state) =>
    state.buys.filter(
      (b) =>
        b.status === "phoned" &&
        b._id.toString() === localStorage.getItem(`${b._id}-buy`)
    )
  );

  const getProduct = (id) => {
    return products.find((p) => p._id === id);
  };

  const voteProduct = (e, value) => {
    setVotes([...votes, { id: e.target.dataset.id, value }]);
    // dispatch(editProduct(id, { rating: value }));
  };

  console.log(buys, votes);

  return (
    <div className="container">
      <div className="VotesView">
        <h3>Оцените продуктов</h3>
        <div className="votes_menu">
          {buys.length && products.length
            ? buys.map((b, idx) => (
                <div className="vote_item" key={idx}>
                  {console.log(b, idx)}
                  <h4>Дата: {moment(+b.data).format("MMMM Do YYYY")}</h4>
                  {b.products.map((p, i) => (
                    <div className="item_products">
                      <div className="product">
                        <div className="pdct_img">
                          <img
                            src={getProduct(p).img[0].thumbnail.path}
                            alt="product-img"
                          />
                        </div>
                        <p>
                          {" "}
                          Название: <span>{getProduct(p).title}</span>
                        </p>
                        <p>
                          Категория:{" "}
                          <span>{getProduct(p).categoryInfo.name}</span>
                        </p>
                        <p>
                          {" "}
                          Магазин: <span>{getProduct(p).shopInfo.name}</span>
                        </p>
                        <p>
                          Цена:{" "}
                          <span>{formatter.format(getProduct(p).price)}</span>
                        </p>
                      </div>

                      <div className="product_form">
                        <Rating
                          id={p}
                          name="simple-controlled"
                          value={votes.find((v) => v.id === `${p}-${idx}`)}
                          size="large"
                          precision={0.5}
                          onChange={(event, newValue) => {
                            dispatch(
                              editProduct(p, {
                                rating: newValue,
                              })
                            );
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default VotesView;
