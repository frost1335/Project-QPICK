const mongoose = require("mongoose");
const Product = require("../models/Product");
const Shop = require("../models/Shop");
const ErrorResponse = require("../utils/ErrorResponse");
const { filterShop, filteredProducts } = require("../utils/filteredProducts");

exports.getAllShops = async (req, res, next) => {
  try {
    const category = await filteredProducts();

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    next(error.message);
  }
};

exports.fetchAllShop = async (req, res, next) => {
  try {
    const shops = await Shop.find();

    res.status(200).json({ success: true, data: shops });
  } catch (error) {
    next(error.message);
  }
};

exports.getShop = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No shop with this ID", 400);
  }
  try {
    let query;

    let uiValues = {
      filtering: {},
      sorting: {},
      maxPrice: null,
      minPrice: null,
    };

    const reqQuery = { ...req.query, shopID: id };

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

      const sortByStr = sortByArr.join(" ");

      query = query.sort(sortByStr);
    } else {
      query = query.sort("-price");
    }

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

exports.createShop = (req, res, next) => {
  const shop = req.body;
  const newShop = new Shop(shop);
  try {
    newShop.save();

    res.status(201).json({ success: true, data: newShop });
  } catch (error) {
    next(error.message);
  }
};

exports.editShop = async (req, res, next) => {
  const { id } = req.params;
  const shop = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No shop with this id", 400);
  }

  try {
    const updatedShop = await Shop.findByIdAndUpdate(
      id,
      {
        ...shop,
        id,
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedShop });
  } catch (error) {
    next(error.message);
  }
};

exports.deleteShop = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No model with this ID", 400);
  }
  try {
    await Shop.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Model deleted successfully" });
  } catch (error) {
    next(error.message);
  }
};
