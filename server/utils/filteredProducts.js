const Product = require("../models/Product");
const Category = require("../models/Category");

exports.filteredProducts = async () => {
  const categories = await Category.find();
  const products = await Product.find();

  return categories.map((ctg) => {
    ctg.products = products.filter((pdct) => {
      return ctg._id.toString() === pdct.categoryID.toString();
    });
    return ctg;
  });
};
