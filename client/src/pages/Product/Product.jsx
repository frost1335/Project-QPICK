import React from "react";
import { Footer, Navbar } from "../../components";
import { ProductView, SimilarProducts } from "../../containers";

const Product = () => {
  return (
    <>
      <Navbar />
      <ProductView />
      <SimilarProducts />
      <Footer />
    </>
  );
};

export default Product;
