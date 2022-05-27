import React from "react";

import "./SmallCard.scss";

const SmallCard = (props) => {
  return (
    <div className="SmallCard">
      <div className="card_img">
        <img src={props.card.img[0].thumbnail.path} alt="asd" />
      </div>
      <div className="card_text">{props.card.name}</div>
    </div>
  );
};

export default SmallCard;
