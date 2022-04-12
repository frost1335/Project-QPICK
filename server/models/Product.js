const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "Please enter product title "],
  },
  img: {
    type: String,
    required: [true, "Please enter product image "],
  },
  price: {
    type: String,
    required: [true, "Please enter product price "],
  },
  categoryID: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: [true, "Please enter a category "],
  },
  rating: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
