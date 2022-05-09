import React from "react";

import "./Selector.scss";

const Selector = ({ setData, data, label, forId }) => {
  return (
    <div className="Selector">
      <label htmlFor={forId}>{label}</label>
      <select onChange={(e) => setData({ ...data }, e.target.value)} id={forId}>
        <option value="null">Choose shop</option>
        <option value="goldID">gold</option>
        <option value="BarakaID">baraka brend</option>
        <option value="styleID">Style asdas</option>
      </select>
    </div>
  );
};

export default Selector;
