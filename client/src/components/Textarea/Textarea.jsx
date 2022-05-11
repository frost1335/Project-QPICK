import React from "react";

import "./Textarea.scss";

const Textarea = (props) => {
  return (
    <div className="Textarea">
      <label htmlFor={props.forId}>{props.label}</label>
      <textarea
        name={props.name}
        id={props.forId}
        rows={props.rows || "10"}
        placeholder={props.placeholder}
        onChange={(e) => props.setData({ ...props.data }, e.target.value)}
      ></textarea>
    </div>
  );
};

export default Textarea;
