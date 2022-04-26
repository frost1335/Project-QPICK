const { Router } = require("express");
const {
  createShop,
  getShop,
  editShop,
  deleteShop,
} = require("../controllers/shop");
const router = Router();

router.route("/").post(createShop);
router.route("/all").get();
router.route("/:id").get(getShop);
router.route("/:id").put(editShop);
router.route("/:id").delete(deleteShop);

module.exports = router;
