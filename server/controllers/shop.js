const mongoose = require("mongoose");
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
    const shops = await Shop.find()

    res.status(200).json({ success: true, data: shops })
  }
  catch (error) {
    next(error.message)
  }
}

exports.getShop = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No shop with this ID", 400);
  }
  try {
    const categorys = await filterShop(id);

    res.status(200).json({ success: true, data: categorys });
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
