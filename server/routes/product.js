const { Router } = require("express");
const router = Router();

const {
  getProducts,
  createProduct,
  deleteProduct,
  editProduct,
  getProductByID,
  getSimilarProducts,
} = require("../controllers/product");
const { uploadProductImages, resizerImages } = require("../utils/fileUpload");

router.route("/").get(getProducts);
router.route("/").post(uploadProductImages, resizerImages, createProduct);
router.route("/:id").get(getProductByID);
router.route("/:id").put(uploadProductImages, resizerImages, editProduct);
router.route("/:id").delete(deleteProduct);
router.route("/similar/:id").get(getSimilarProducts);

module.exports = router;
