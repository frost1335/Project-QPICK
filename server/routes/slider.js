const { Router } = require("express");
const {
  getSliders,
  createSlider,
  editSlider,
  deleteSlider,
} = require("../controllers/slider");
const router = Router();

const { uploadProductImages, resizerImages } = require("../utils/fileUpload");

router.route("/").get(getSliders);
router.route("/").post(uploadProductImages, resizerImages, createSlider);
router.route("/:id").put(uploadProductImages, resizerImages, editSlider);
router.route("/:id").delete(deleteSlider);

module.exports = router;
