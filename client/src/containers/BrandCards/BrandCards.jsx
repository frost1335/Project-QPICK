import React from "react";
import { useSelector } from "react-redux";
import { SmallCard } from "../../components";

import "./BrandCards.scss";

const BrandCards = () => {
  const brands = useSelector((state) => state.brand);

  return (
    <div className="container">
      <div className="BrandCards">
        <h3>Бренды</h3>
        <div className="brand">
          {brands.data
            ? brands.data.map((bnd, idx) => (
                <SmallCard card={bnd} key={idx} link={"/brand/" + bnd._id} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
