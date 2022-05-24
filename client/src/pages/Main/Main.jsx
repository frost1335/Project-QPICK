import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Navbar,
  Footer,
  CategorySlider,
  Reklama,
  Banner,
  BuyModal,
} from "../../components";
import { BrandCards, MainCategory, ShopCards } from "../../containers";

const Main = () => {
  const { id } = useParams();

  const product = useSelector((state) =>
    id ? state.product.find((p) => p._id === id) : null
  );

  return (
    <>
      {/* BuyModal component */}
      {id ? <BuyModal products={product} id={id} /> : null}
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
