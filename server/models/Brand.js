const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter brand name"],
  },
  img: String,
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
