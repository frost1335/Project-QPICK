const { Router } = require("express");
const router = Router();

const {
  getProducts,
  createProduct,
  deleteProduct,
  editProduct,
  getProductByID,
} = require("../controllers/product");

router.route("/").get(getProducts);
router.route("/").post(createProduct);
router.route("/:id").get(getProductByID);
router.route("/:id").put(editProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;
