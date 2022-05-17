import React from "react";
import { useSelector } from "react-redux";
import { SmallCard } from "../../components";
import Loader from "../../components/Loader/Loader";

import "./BrandCards.scss";

const BrandCards = () => {
  const brands = useSelector((state) => state.brand);

  return (
    <div className="container">
      <div className="BrandCards">
        <h3>Бренды</h3>
        <div className="brand">
          {brands.length ? (
            brands.map((bnd, idx) => (
              <SmallCard card={bnd} key={idx} link={"/brand/" + bnd._id} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
