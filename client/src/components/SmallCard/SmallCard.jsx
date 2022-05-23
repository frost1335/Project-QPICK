import React from "react";
import { Link } from "react-router-dom";

import "./SmallCard.scss";

const SmallCard = (props) => {
  return (
    <Link to={props.link} className="SmallCard">
      <div className="card_img">
        <img src={props.card.img[0].thumbnail.path} alt="asd" />
      </div>
      <div className="card_text">{props.card.name}</div>
    </Link>
  );
};

export default SmallCard;
