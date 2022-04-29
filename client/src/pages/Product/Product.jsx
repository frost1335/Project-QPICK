import React from "react";
import { Footer, Navbar, CategorySlider } from "../../components";
import { ProductView } from "../../containers";
import SimilarProducts from "../../containers/SimilarProducts/SimilarProducts";

import "./Product.scss";

const Product = () => {
  return (
    <>
      <Navbar />
      <CategorySlider />
      <ProductView />
      <SimilarProducts />
      <Footer />
    </>
  );
};

export default Product;
