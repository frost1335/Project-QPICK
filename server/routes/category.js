const { Router } = require("express");
const router = Router();

const {
  getCategories,
  createCategory,
  editCategory,
  deleteCategory,
  getCategory,
} = require("../controllers/category");

router.route("/").get(getCategories);
router.route("/").post(createCategory);
router.route("/:id").put(editCategory);
router.route("/:id").delete(deleteCategory);
router.route("/ctg/:id").get(getCategory);

module.exports = router;
