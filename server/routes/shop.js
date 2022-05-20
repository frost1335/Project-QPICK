const { Router } = require("express");
const {
  createShop,
  getShop,
  editShop,
  deleteShop,
  getAllShops,
  fetchAllShop,
} = require("../controllers/shop");
const router = Router();
const { uploadProductImages, resizerImages } = require("../utils/fileUpload");

router.route("/").get(fetchAllShop);
router.route("/").post(uploadProductImages, resizerImages, createShop);
router.route("/all").get(getAllShops);
router.route("/:id").get(getShop);
router.route("/:id").put(uploadProductImages, resizerImages, editShop);
router.route("/:id").delete(deleteShop);

module.exports = router;
