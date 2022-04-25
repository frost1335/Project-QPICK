import React from "react";
import { Navbar, Footer, CategorySlider, Reklama } from "../../components";
import { MainCategory } from "../../containers";

const Main = () => {
  return (
    <div>
      <Navbar />
      <CategorySlider />
      <Reklama />
      <MainCategory />
      Main
      <Footer />
    </div>
  );
};

export default Main;
