const { Router } = require("express");
const {
  getBuys,
  createBuy,
  editBuy,
  deleteBuy,
} = require("../controllers/buy");
const router = Router();

router.route("/").get(getBuys);
router.route("/").post(createBuy);
router.route("/:id").put(editBuy);
router.route("/:id").delete(deleteBuy);

module.exports = router;
