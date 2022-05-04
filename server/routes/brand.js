const { Router } = require("express");
const {
  createBrand,
  fetchAll,
  editBrand,
  deleteBrand,
} = require("../controllers/brand");

const router = Router();

router.route("/").post(createBrand);
router.route("/").get(fetchAll);
router.route("/:id").put(editBrand);
router.route("/:id").delete(deleteBrand);

module.exports = router;
