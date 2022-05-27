const ErrorResponse = require("../utils/ErrorResponse");
const Category = require("../models/Category");
const {
  filteredProducts,
  filterCategory,
} = require("../utils/filteredProducts");
const { default: mongoose } = require("mongoose");
const Product = require("../models/Product");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error.message);
  }
};

exports.getCategory = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No category with this ID", 400);
  }

  try {
    let query;

    let uiValues = {
      filtering: {},
      sorting: {},
      maxPrice: null,
      minPrice: null,
    };

    const reqQuery = { ...req.query, categoryID: id };

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

exports.createCategory = (req, res, next) => {
  const category = req.body;
  const newCategory = new Category(category);

  try {
    newCategory.save();

    res.status(201).json({
      success: true,
      data: newCategory,
    });
  } catch (error) {
    next(error.message);
  }
};

exports.editCategory = async (req, res, next) => {
  const { id } = req.params;
  const category = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No category with this ID", 400);
  }

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        ...category,
        id,
      },
      {
        new: true,
      }
    );

    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error) {
    next(error.message);
  }
};

exports.deleteCategory = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No category with this ID", 400);
  }

  try {
    await Category.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Category successfully deleted" });
  } catch (error) {
    next(error.message);
  }
};
