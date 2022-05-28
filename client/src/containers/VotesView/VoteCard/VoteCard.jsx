import Rating from "@material-ui/lab/Rating";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";

const formatter = new Intl.NumberFormat("uz-UZ", {
  style: "currency",
  currency: "UZS",
  maximumFractionDigits: 2,
});

const VoteCard = (props) => {
  const products = useSelector((state) => state.product);
  const getProduct = (id) => {
    return products.find((p) => p._id === id);
  };

  return (
    <div className="vote_item">
      <h4>Дата: {moment(+props.b.data).format("MMMM Do YYYY")}</h4>
      {products.length
        ? props.b.products.map((p, i) => (
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
                  Категория: <span>{getProduct(p).categoryInfo.name}</span>
                </p>
                <p>
                  {" "}
                  Магазин: <span>{getProduct(p).shopInfo.name}</span>
                </p>
                <p>
                  Цена: <span>{formatter.format(getProduct(p).price)}</span>
                </p>
              </div>

              <div className="product_form">
                <Rating
                  id={p}
                  name="simple-controlled"
                  value={
                    // props.votes.find((v) => v.id === `${p}-${props.b._id}`)
                    //   .value
                    1.3
                  }
                  size="large"
                  precision={0.5}
                  onChange={(event, newValue) =>
                    props.voteProduct(p, props.b._id, newValue)
                  }
                />
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default VoteCard;
