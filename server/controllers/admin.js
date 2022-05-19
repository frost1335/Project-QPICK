const { default: mongoose } = require("mongoose");
const Admin = require("../models/Admin");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getAuth = async (req, res, next) => {
  try {
    const admin = req.admin;

    res.status(200).json({ success: true, data: admin });
  } catch (error) {
    next(error.message);
  }
};

exports.getAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find();

    res.status(200).json({
      success: true,
      data: admins.filter((a) => a.status !== "owner"),
    });
  } catch (error) {
    next(error.message);
  }
};

exports.createAdmin = async (req, res, next) => {
  const admin = req.body;

  try {
    const admins = await Admin.find();
    if (!admins.length) {
      admin.status = "owner";
    } else {
      admin.status = "admin";
    }
    const newAdmin = new Admin(admin);
    newAdmin.save();
    res.status(201).json({ success: true, data: newAdmin });
  } catch (error) {
    next(error.message);
  }
};

exports.editAdmin = async (req, res, next) => {
  const { id } = req.params;
  const admin = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No admin with this ID", 404);
  }
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(
      id,
      {
        ...admin,
        id,
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedAdmin });
  } catch (error) {
    next(error.message);
  }
};

exports.deleteAdmin = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("No admin with this ID", 404);
  }
  try {
    await Admin.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "admin deleted successfully" });
  } catch (error) {
    next(error.message);
  }
};
