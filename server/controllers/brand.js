const { default: mongoose } = require("mongoose");
const Brand = require("../models/Brand");
const ErrorResponse = require("../utils/ErrorResponse");
const deleteFile = require("../utils/fileDelete");

exports.fetchAll = async (req, res, next) => {
  try {
    const brands = await Brand.find();

    res.status(200).json({ success: true, data: brands });
  } catch (error) {
    next(error.message);
  }
};

exports.createBrand = (req, res, next) => {
  const brand = req.body;
  const newBrand = new Brand(brand);

  try {
    newBrand.save();

    res.status(201).json({
      success: true,
      data: newBrand,
    });
  } catch (error) {
    next(error.message);
  }
};

exports.editBrand = async (req, res, next) => {
  const { id } = req.params;
  if (req.body.img) {
    const oldBrand = await Brand.findById(id).select("img");
    deleteFile(oldBrand.img);
  }
  const brand = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No brand with this ID", 404);
  }
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(
      id,
      { ...brand, id },
      {
        new: true,
      }
    );

    res.status(200).json({ success: true, data: updatedBrand });
  } catch (error) {
    next(error.message);
  }
};

exports.deleteBrand = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No brand with this ID", 404);
  }
  try {
    const brand = await Brand.findById(id).select("img");
    deleteFile(brand.img);

    await Brand.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Brand successfully deleted" });
  } catch (error) {
    next(error.message);
  }
};
