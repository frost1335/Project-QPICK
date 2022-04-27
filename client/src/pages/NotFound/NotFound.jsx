import React from "react";
import { Footer, Navbar } from "../../components";

import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="notfound_block">
      <Navbar />
      <div className="NotFound">
        <h1>404</h1>
        <p>Page is not found</p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
