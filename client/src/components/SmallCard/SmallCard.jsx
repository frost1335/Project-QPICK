import React from "react";
import { Tshirt } from "../../images";

import "./SmallCard.scss";

const SmallCard = () => {
  return (
    <div className="SmallCard">
      <div className="card_img">
        <img src={Tshirt} alt="asd" />
      </div>
      <div className="card_text">Lenovo</div>
    </div>
  );
};

export default SmallCard;
