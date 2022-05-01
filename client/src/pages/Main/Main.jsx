import React from "react";
import {
  Navbar,
  Footer,
  CategorySlider,
  Reklama,
  Banner,
} from "../../components";
import { MainCategory, ShopCards } from "../../containers";

const Main = () => {
  return (
    <>
      <Navbar />
      <CategorySlider />
      <Reklama />
      <Banner />
      <MainCategory />
      <ShopCards />
      <Footer />
    </>
  );
};

export default Main;
