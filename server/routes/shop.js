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

router.route("/").get(fetchAllShop);
router.route("/").post(createShop);
router.route("/all").get(getAllShops);
router.route("/:id").get(getShop);
router.route("/:id").put(editShop);
router.route("/:id").delete(deleteShop);

module.exports = router;
