import React from "react";
import { useSelector } from "react-redux";

import "./MainCategory.scss";

const MainCategory = () => {
  const accessory = useSelector((state) => state.accessory);

  console.log(accessory);
  return (
    <div className="container">
      <div className="MainCategory"></div>
    </div>
  );
};

export default MainCategory;
