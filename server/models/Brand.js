const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter brand name"],
  },
  img: {
    type: Array,
    required: [true, "Please enter Brand img "]
  },
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
