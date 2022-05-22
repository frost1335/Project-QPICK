const { Router } = require("express");
const {
  getBanners,
  createBanner,
  editBanner,
  deleteBanner,
} = require("../controllers/banner");
const router = Router();

const { uploadProductImages, resizerImages } = require("../utils/fileUpload");

router.route("/").get(getBanners);
router.route("/").post(uploadProductImages, resizerImages, createBanner);
router.route("/:id").put(uploadProductImages, resizerImages, editBanner);
router.route("/:id").delete(deleteBanner);

module.exports = router;
