import React from "react";

import "./RangeSlider.scss";

const RangeSlider = () => {
  const slider = document.getElementById("myRange");
  const output = document.getElementById("demo");
  return (
    <div class="RangeSlider">
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      />
      <p>
        Value: <span id="demo"></span>
      </p>
    </div>
  );
};

export default RangeSlider;
