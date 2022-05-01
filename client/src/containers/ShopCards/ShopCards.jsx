import React from "react";
import { SmallCard } from "../../components";

import "./ShopCards.scss";

const ShopCards = () => {
  return (
    <div className="container">
      <div className="ShopCards">
        <h3>Бренды</h3>
        <div className="shop">
          {[0, 1, 2, 3, 4,1,1].map((shop, idx) => (
            <SmallCard shop={shop} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
