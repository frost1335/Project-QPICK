const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter category name"],
  },
  img: {
    type: Array,
    required: [true, "Please enter category image"],
  },
  products: Array,
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
