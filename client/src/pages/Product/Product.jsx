import React from "react";
import { Footer, Navbar, CategorySlider } from "../../components";
import { ProductView } from "../../containers";

import "./Product.scss";

const Product = () => {
  return (
    <>
      <Navbar />
      <CategorySlider />
      <ProductView />
      <Footer />
    </>
  );
};

export default Product;
