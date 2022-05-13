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
  shopID: {
    type: mongoose.Types.ObjectId,
    ref: "Shop",
    required: [true, "Please enter a shop"],
  },
  shopInfo: {
    type: Object,
    required: [true, "Please enter a shop info !"],
  },
  categoryInfo: {
    type: Object,
    required: [true, "Please enter a category info !"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  tags: {
    type: Array,
    required: [true, "Please enter product tag names"],
  },
  rating: {
    type: Number,
    required: [true, "Please enter product rating"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
