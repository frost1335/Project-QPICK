const { default: mongoose } = require("mongoose");
const Banner = require("../models/Banner");
const ErrorResponse = require("../utils/ErrorResponse");
const deleteFile = require("../utils/fileDelete");

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
  if (req.body.img) {
    const oldBanner = await Banner.findById(id).select("img");
    deleteFile(oldBanner.img);
  }
  const banner = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No Banner with this ID", 404);
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
    return new ErrorResponse("No Banner with this ID", 404);
  }
  try {
    const banner = await Banner.findById(id).select("img");
    deleteFile(banner.img);

    await Banner.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Banner successfully deleted" });
  } catch (error) {
    next(error.message);
  }
};
