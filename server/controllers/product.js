const mongoose = require("mongoose");
const Product = require("../models/Product");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error.message);
  }
};

exports.createProduct = (req, res, next) => {
  const product = req.body;

  const newProduct = new Product(product);
  try {
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
