import React from "react";
import {
  Navbar,
  Footer,
  CategorySlider,
  Reklama,
  Banner,
} from "../../components";
import { MainCategory } from "../../containers";

const Main = () => {
  return (
    <div>
      <Navbar />
      <CategorySlider />
      <Reklama />
      <Banner />
      <MainCategory />
      <Footer />
    </div>
  );
};

export default Main;
