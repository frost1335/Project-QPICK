const { default: mongoose } = require("mongoose");
const Banner = require("../models/Slider");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getBanners = async (req, res, next) => {
  try {
    const banners = await Banner.find();

    res.status(200).json({ success: true, data: banners });
  } catch (error) {
    next(error.message);
  }
};

exports.createBanner = (req, res, next) => {
  const banner = req.body;
  const newBanner = new Banner(banner);
  try {
    newBanner.save();

    res.status(201).json({ success: true, data: newBanner });
  } catch (error) {
    next(error.message);
  }
};

exports.editBanner = async (req, res, next) => {
  const { id } = req.params;
  const banner = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No Slider with this ID", 404);
  }
  try {
    const updatedBanner = await Banner.findByIdAndUpdate(
      id,
      {
        ...banner,
        id,
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedBanner });
  } catch (error) {
    next(error.message);
  }
};

exports.deleteBanner = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No Slider with this ID", 404);
  }
  try {
    await Banner.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Banner successfully deleted" });
  } catch (error) {
    next(error.message);
  }
};
