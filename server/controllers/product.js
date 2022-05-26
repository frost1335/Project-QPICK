const { default: mongoose } = require("mongoose");
const Product = require("../models/Product");
const Shop = require("../models/Shop");
const Category = require("../models/Category");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getProducts = async (req, res, next) => {
  let query;

  let uiValues = {
    filtering: {},
    sorting: {},
    maxPrice: null,
    minPrice: null,
  };

  const reqQuery = { ...req.query };

  const removeFields = ["sort"];

  removeFields.forEach((val) => delete reqQuery[val]);

  const filterKeys = Object.keys(reqQuery);
  const filterValues = Object.values(reqQuery);

  filterKeys.forEach(
    (val, idx) => (uiValues.filtering[val] = filterValues[idx])
  );

  let queryStr = JSON.stringify(reqQuery);

  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  query = Product.find(JSON.parse(queryStr));

  if (req.query.sort) {
    const sortByArr = req.query.sort.split(",");

    sortByArr.forEach((val) => {
      let order;

      if (val[0] === "-") {
        order = "descending";
      } else {
        order = "ascending";
      }

      uiValues.sorting[val.replace("-", "")] = order;
    });

    const sortByStr = sortByArr.join();

    query = query.sort(sortByStr);
  } else {
    query = query.sort("-price");
  }

  try {
    const products = await query;

    const maxPrice = await Product.find()
      .sort({ price: -1 })
      .limit(1)
      .select("-_id price");

    const minPrice = await Product.find()
      .sort({ price: 1 })
      .limit(1)
      .select("-_id price");

    uiValues.maxPrice = maxPrice[0].price;
    uiValues.minPrice = minPrice[0].price;

    res.status(200).json({ success: true, data: products, uiValues });
  } catch (error) {
    next(error.message);
  }
};

exports.getProductByID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(error.message);
  }
};

exports.createProduct = async (req, res, next) => {
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(product.shopID)) {
    return new ErrorResponse("No shop with this ID", 400);
  }

  try {
    product.shopInfo = await Shop.findById(product.shopID);
    product.categoryInfo = await Category.findById(product.categoryID);
    const newProduct = new Product(product);
    newProduct.save();

    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    next(error.message);
  }
};

exports.editProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No product with this ID", 404);
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...product, id },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    next(error.message);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No product with this ID", 404);
  }

  try {
    await Product.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Product successfully deleted" });
  } catch (error) {
    next(error.message);
  }
};

exports.getSimilarProducts = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No product with this ID", 404);
  }
  try {
    const products = await Product.find();
    const product = await Product.findById(id);

    const similarProducts = products.filter(
      (pdct) =>
        product.categoryID.toString() === pdct.categoryID.toString() &&
        product._id.toString() !== pdct._id.toString()
    );

    res.status(200).json({ success: true, data: similarProducts });
  } catch (error) {
    next(error.message);
  }
};
