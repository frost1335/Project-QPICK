import React from "react";
import { Footer, Navbar } from "../../components";
import { CartView } from "../../containers";

import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cartPage">
      <Navbar />
      <CartView />
      <Footer />
    </div>
  );
};

export default Cart;
