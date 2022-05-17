import React from "react";
import { useSelector } from "react-redux";
import { SmallCard, Loader } from "../../components";

import "./ShopCards.scss";

const ShopCards = () => {
  const shops = useSelector((state) => state.shops);

  return (
    <div className="container">
      <div className="ShopCards">
        <h3>Магазины</h3>
        <div className="shop">
          {shops.length ? (
            shops.map((shop, idx) => (
              <SmallCard card={shop} key={idx} link={"/shop/" + shop._id} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
