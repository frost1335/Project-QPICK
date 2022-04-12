const { Router } = require("express");
const router = Router();

router.route("/").get();
router.route("/").post();
router.route("/:id").put();
router.route("/:id").delete();
router.route("/ctg/:id").get();

module.exports = router;
