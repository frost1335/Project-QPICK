import React from "react";
import { useSelector } from "react-redux";

import "./Selector.scss";

const isInvalid = ({ valid, touched, shouldValidate }) => {
  return !valid && shouldValidate && touched;
};

const Selector = (props) => {
  const categories = useSelector((state) => state.categories);
  const shops = useSelector((state) => state.shops);
  const inputType = props.type || "text";
  const cls = ["Selector"];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push("invalid");
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>

      <select onChange={props.onChange} id={htmlFor}>
        <option value="">Choose</option>
        {shops.length && categories.length
          ? props.array === "shop"
            ? shops.map((elem, idx) => (
                <option
                  value={elem._id}
                  selected={props.value === elem._id}
                  key={idx}
                >
                  {elem.name}
                </option>
              ))
            : categories.map((elem, idx) => (
                <option
                  value={elem._id}
                  selected={props.value === elem._id}
                  key={idx}
                >
                  {elem.name}
                </option>
              ))
          : null}
      </select>

      {isInvalid(props) ? (
        <span>{props.errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

export default Selector;
