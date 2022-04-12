const mongoose = require("mongoose");
const Product = require("../models/Product");
const Category = require("../models/Category");

exports.filteredProducts = async () => {
  const categories = await Category.find();
  const products = await Product.find();

  return categories.map(
    (ctg) =>
      (ctg.products = products.filter(
        (pdct) => ctg._id.toString() === pdct._id.toString()
      ))
  );
};

exports.filterCategory = async (id) => {
  const category = await Category.findById(id);

  const products = await Product.find();

  category.products = products.filter(
    (pdct) => category._id.toString() === pdct._id.toString()
  );

  return category;
};
