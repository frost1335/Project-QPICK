const { default: mongoose } = require("mongoose");
const Buy = require("../models/Buy");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getBuys = async (req, res, next) => {
  try {
    const buys = await Buy.find();

    res.status(200).json({ success: true, data: buys });
  } catch (error) {
    next(error.message);
  }
};

exports.createBuy = (req, res, next) => {
  const buy = req.body;
  const newBuy = new Buy(buy);
  try {
    newBuy.save();

    res.status(201).json({ success: true, data: newBuy });
  } catch (error) {
    next(error.message);
  }
};

exports.editBuy = async (req, res, next) => {
  const { id } = req.params;
  const buy = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No buy with this ID", 404);
  }
  try {
    const updatedBuy = await Buy.findByIdAndUpdate(
      id,
      {
        ...buy,
        id,
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedBuy });
  } catch (error) {
    next(error.message);
  }
};

exports.deleteBuy = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Buy.findByIdAndRemove(id);

    res.status(200).json({ success: true, data: "Buy deleted successfully !" });
  } catch (error) {
    next(error.message);
  }
};
