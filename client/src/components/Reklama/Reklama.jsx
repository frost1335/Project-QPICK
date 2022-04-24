import React from "react";
import { reklamaImg } from "../../images/index";

import "./Reklama.scss";

const Reklama = () => {
  return (
    <div className="container">
      <div className="Reklama">
        <div className="text">
          <h1>Аксессуары для Iphone 13 Pro Max</h1>
        </div>
        <div className="image">
          <img src={reklamaImg} alt="accessory" />
        </div>
      </div>
    </div>
  );
};

export default Reklama;
