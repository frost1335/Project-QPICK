import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Navbar, Footer, BuyModal } from "../../components";
import { ShopView } from "../../containers";

const Shop = () => {
  const { pdID } = useParams();

  const product = useSelector((state) =>
    pdID ? state.product.find((p) => p._id === pdID) : null
  );
  return (
    <>
      {pdID ? <BuyModal products={product} id={pdID} /> : null}
      <Navbar />
      <ShopView />
      <Footer />
    </>
  );
};

export default Shop;
