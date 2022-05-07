import React from "react";
import {
  Navbar,
  Footer,
  CategorySlider,
  Reklama,
  Banner,
} from "../../components";
import { BrandCards, MainCategory, ShopCards } from "../../containers";

const Main = () => {
  return (
    <>
      <Navbar />
      <CategorySlider />
      <Reklama />
      <Banner />
      <ShopCards />
      <MainCategory />
      <BrandCards />
      <Footer />
    </>
  );
};

export default Main;
