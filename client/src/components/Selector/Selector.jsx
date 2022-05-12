import React from "react";

import "./Selector.scss";

const Selector = ({ setData, data, label, forId, array, value }) => {
  return (
    <div className="Selector">
      <label htmlFor={forId}>{label}</label>
      <select
        onChange={(e) => setData({ ...data }, e.target.value)}
        value={value}
        id={forId}
      >
        <option>Choose shop</option>
        {array
          ? array.map((elem, idx) => (
              <option value={elem._id} key={idx}>
                {elem.name}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default Selector;
