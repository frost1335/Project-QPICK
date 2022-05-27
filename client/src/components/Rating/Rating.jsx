import React from "react";

import Rating from "@material-ui/lab/Rating";

import "./Rating.scss";

const isInvalid = ({ valid, touched, shouldValidate }) => {
  return !valid && shouldValidate && touched;
};

const RatingInput = (props) => {
  const inputType = props.type || "text";
  const cls = ["Rating"];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push("invalid");
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor} className={'inputLabel'}>{props.label}</label>

      <Rating
        id={htmlFor}
        name="simple-controlled"
        value={props.value}
        size="large"
        precision={0.5}
        onChange={props.onChange}
      />

      {isInvalid(props) ? (
        <span>{props.errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

export default RatingInput;
