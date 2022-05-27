const { Router } = require("express");
const router = Router();

const {
  getCategories,
  createCategory,
  editCategory,
  deleteCategory,
  getCategory,
} = require("../controllers/category");
const { uploadProductImages, resizerImages } = require("../utils/fileUpload");

router.route("/").get(getCategories);
router.route("/").post(uploadProductImages, resizerImages, createCategory);
router.route("/:id").get(getCategory);
router.route("/:id").put(uploadProductImages, resizerImages, editCategory);
router.route("/:id").delete(deleteCategory);

module.exports = router;
