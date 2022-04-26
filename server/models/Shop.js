const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter shop name"],
  },
  categorys: Array,
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
