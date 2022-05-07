import React from "react";
import { Footer, Navbar } from "../../components";
import { FavoriteView } from "../../containers";

import "./Favorite.scss";

const Favorite = () => {
  return (
    <div className="favoriePage">
      <Navbar />
      <FavoriteView />
      <Footer />
    </div>
  );
};

export default Favorite;
