import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Navbar, Footer, BuyModal } from "../../components";
import { CategoryView } from "../../containers";

const Category = () => {
  const { pdID } = useParams();

  const product = useSelector((state) =>
    pdID ? state.product.find((p) => p._id === pdID) : null
  );

  return (
    <>
      {pdID ? <BuyModal products={product} id={pdID} /> : null}
      <Navbar />
      <CategoryView />
      <Footer />
    </>
  );
};

export default Category;
