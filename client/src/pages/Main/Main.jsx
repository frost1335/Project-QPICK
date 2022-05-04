import React from "react";
import {
  Navbar,
  Footer,
  CategorySlider,
  Reklama,
  Banner,
} from "../../components";
import { MainCategory, ShopCards } from "../../containers";
import BrandCards from "../../containers/BrandCards/BrandCards";

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
