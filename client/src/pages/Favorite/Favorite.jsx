import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BuyModal, Footer, Navbar } from "../../components";
import { FavoriteView } from "../../containers";

import "./Favorite.scss";

const Favorite = () => {
  const { id } = useParams();

  const product = useSelector((state) =>
    id ? state.product.find((p) => p._id === id) : null
  );

  return (
    <div className="favoriePage">
      {/* BuyModal component */}
      {id ? <BuyModal products={product} id={id} /> : null}
      <Navbar />
      <FavoriteView />
      <Footer />
    </div>
  );
};

export default Favorite;
