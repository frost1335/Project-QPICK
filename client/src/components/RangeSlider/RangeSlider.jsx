import React, { useState } from "react";

import Rating from "@material-ui/lab/Rating";

import "./RangeSlider.scss";

const RangeSlider = () => {
  const [rate, setRate] = useState("");

  console.log(rate);

  return (
    <div class="RangeSlider">
      <Rating
        name="simple-controlled"
        value={rate}
        size="large"
        precision={0.5}
        onChange={(event, newValue) => {
          setRate(newValue);
        }}
      />
    </div>
  );
};

export default RangeSlider;
