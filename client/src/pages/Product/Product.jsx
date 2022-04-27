import React from "react";
import { Footer, Navbar, CategorySlider } from "../../components";

import "./Product.scss";

const Product = () => {
  
  return (
    <>
      <Navbar />
      <CategorySlider />
      <div className="Product"></div>
      <Footer />
    </>
  );
};

export default Product;
