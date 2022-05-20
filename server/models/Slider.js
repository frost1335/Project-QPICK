const mongoose = require("mongoose");

const sliderSchema = mongoose.Schema({
  img: {
    type: Array,
    required: [true, "Please upload slider img"],
  },
});

const Slider = mongoose.model("Slider", sliderSchema);
module.exports = Slider;
