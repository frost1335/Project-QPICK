import React from "react";
import { Navbar, Footer } from "../../components";
import Reklama from "../../components/Reklama/Reklama";
import { MainCategory } from "../../containers";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Reklama />
      <MainCategory />
      Main
      <Footer />
    </div>
  );
};

export default Main;
