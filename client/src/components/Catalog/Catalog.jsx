import React from "react";

import "./Catalog.scss";

const Catalog = (props) => {
  return props.menu ? (
    <>
      <div className="Catalog">Catalog</div>
    </>
  ) : null;
};

export default Catalog;
