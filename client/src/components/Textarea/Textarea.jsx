import React from "react";

import "./Textarea.scss";

const isInvalid = ({ valid, touched, shouldValidate }) => {
  return !valid && shouldValidate && touched;
};

const Textarea = (props) => {
  const inputType = props.type || "text";
  const cls = ["Textarea"];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push("invalid");
  }
  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>

      <textarea
        id={htmlFor}
        value={props.value}
        rows={props.rows || "10"}
        onChange={props.onChange}
      ></textarea>

      {isInvalid(props) ? (
        <span>{props.errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

export default Textarea;
