import React from "react";

import "./CreateInput.scss";

const CreateInput = (props) => {
  return (
    <div className="CreateInput">
      <label htmlFor={props.forId}>{props.label}</label>
      <input
        placeholder={props.placeholder}
        id={props.forId}
        type={props.type}
        pattern={props.pattern}
        maxLength={props.maxLength}
        value={props.value}
        name={props.name}
        onChange={(e) => props.setData({ ...props.data }, e.target.value)}
      />
    </div>
  );
};

export default CreateInput;
