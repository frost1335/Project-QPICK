const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter shop name"],
  },
  img: {
    type: Array,
    required: [true, "Please enter shop image"],
  },
  categorys: Array,
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
