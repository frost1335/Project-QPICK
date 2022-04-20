const { Router } = require("express");
const {
  createModel,
  getModel,
  editModel,
  deleteModel,
} = require("../controllers/model");
const router = Router();

router.route("/").post(createModel);
router.route("/all").get();
router.route("/:id").get(getModel);
router.route("/:id").put(editModel);
router.route("/:id").delete(deleteModel);

module.exports = router;
