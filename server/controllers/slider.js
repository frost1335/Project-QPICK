const { default: mongoose } = require("mongoose");
const Slider = require("../models/Slider");
const ErrorResponse = require("../utils/ErrorResponse");
const deleteFile = require("../utils/fileDelete");

exports.getSliders = async (req, res, next) => {
  try {
    const sliders = await Slider.find();

    res.status(200).json({ success: true, data: sliders });
  } catch (error) {
    next(error.message);
  }
};

exports.createSlider = (req, res, next) => {
  const slider = req.body;
  const newSlider = new Slider(slider);
  try {
    newSlider.save();

    res.status(201).json({ success: true, data: newSlider });
  } catch (error) {
    next(error.message);
  }
};

exports.editSlider = async (req, res, next) => {
  const { id } = req.params;
  if (req.body.img) {
    const oldSlider = await Slider.findById(id).select("img");
    deleteFile(oldSlider.img);
  }
  const slider = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No Slider with this ID", 404);
  }
  try {
    const updatedSlider = await Slider.findByIdAndUpdate(
      id,
      {
        ...slider,
        id,
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedSlider });
  } catch (error) {
    next(error.message);
  }
};

exports.deleteSlider = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No Slider with this ID", 404);
  }
  try {
    const slider = await Slider.findById(id).select("img");
    deleteFile(slider.img);

    await Slider.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Slider successfully deleted" });
  } catch (error) {
    next(error.message);
  }
};
