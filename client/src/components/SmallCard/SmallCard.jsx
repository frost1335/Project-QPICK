import React from "react";
import { Link } from "react-router-dom";
import { Tshirt } from "../../images";

import "./SmallCard.scss";

const SmallCard = (props) => {
  return (
    <Link to={props.link} className="SmallCard">
      <div className="card_img">
        <img src={Tshirt} alt="asd" />
      </div>
      <div className="card_text">{props.card.name}</div>
    </Link>
  );
};

export default SmallCard;
