const { Router } = require("express");
const {
  getAdmins,
  createAdmin,
  editAdmin,
  deleteAdmin,
  getAuth,
} = require("../controllers/admin");
const { protect } = require("../middleware/auth");

const router = Router();

router.route("/control").get(protect, getAuth);
router.route("/").get(getAdmins);
router.route("/").post(createAdmin);
router.route("/:id").put(editAdmin);
router.route("/:id").delete(deleteAdmin);

module.exports = router;
