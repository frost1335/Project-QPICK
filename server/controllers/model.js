const mongoose = require("mongoose");
const Model = require("../models/Model");
const ErrorResponse = require("../utils/ErrorResponse");
const { filterModel } = require("../utils/filteredProducts");

exports.getAllModels = async (req, res, next) => {
  try {
    const category = await filteredProducts();

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    next(error.message);
  }
};

exports.getModel = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No model with this ID", 400);
  }
  try {
    const categorys = await filterModel(id);

    console.log(categorys);

    res.status(200).json({ success: true, data: categorys });
  } catch (error) {
    next(error.message);
  }
};

exports.createModel = (req, res, next) => {
  const model = req.body;
  const newModel = new Model(model);
  try {
    newModel.save();

    res.status(201).json({ success: true, data: newModel });
  } catch (error) {
    next(error.message);
  }
};

exports.editModel = async (req, res, next) => {
  const { id } = req.params;
  const model = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No model with this id", 400);
  }

  try {
    const updatedModel = await Model.findByIdAndUpdate(
      id,
      {
        ...model,
        id,
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedModel });
  } catch (error) {
    next(error.message);
  }
};

exports.deleteModel = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No model with this ID", 400);
  }
  try {
    await Model.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Model deleted successfully" });
  } catch (error) {
    next(error.message);
  }
};
