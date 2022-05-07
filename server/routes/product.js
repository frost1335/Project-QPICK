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

router.route("/").get(getProducts);
router.route("/").post(createProduct);
router.route("/:id").get(getProductByID);
router.route("/:id").put(editProduct);
router.route("/:id").delete(deleteProduct);
router.route("/similar/:id").get(getSimilarProducts);

module.exports = router;
