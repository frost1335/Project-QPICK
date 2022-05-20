const { Router } = require("express");
const {
  createBrand,
  fetchAll,
  editBrand,
  deleteBrand,
} = require("../controllers/brand");
const router = Router();

const { uploadProductImages, resizerImages } = require("../utils/fileUpload");

router.route("/").post(uploadProductImages, resizerImages, createBrand);
router.route("/").get(fetchAll);
router.route("/:id").put(uploadProductImages, resizerImages, editBrand);
router.route("/:id").delete(deleteBrand);

module.exports = router;
