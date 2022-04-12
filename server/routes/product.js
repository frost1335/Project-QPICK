const { Router } = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/product");
const router = Router();

router.route("/").get(getProducts);
router.route("/").post(createProduct);
router.route("/:id").put(editProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;
