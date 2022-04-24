const Product = require("../models/Product");
const Category = require("../models/Category");

exports.filteredProducts = async () => {
  const categories = await Category.find();
  const products = await Product.find();

  return categories.map((ctg) => {
    let i = 0;
    ctg.products = products.filter((pdct) => {
      i += 1;
      return ctg._id.toString() === pdct.categoryID.toString() && i <= 3;
    });
    return ctg;
  });
};

exports.filterModel = async (id) => {
  const categories = await Category.find();
  const products = await Product.find();

  return categories.map((ctg) => {
    ctg.products = products.filter(
      (pdct) =>
        ctg._id.toString() === pdct.categoryID.toString() &&
        id.toString() === pdct.modelID.toString()
    );
    return ctg;
  });
};

exports.filterCategory = async (id) => {
  const category = await Category.findById(id);

  const products = await Product.find();

  category.products = products.filter(
    (pdct) => category._id.toString() === pdct.categoryID.toString()
  );

  return category;
};
