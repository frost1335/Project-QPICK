const Admin = require("../models/Admin");
const ErrorResponse = require("../utils/ErrorResponse");

exports.protect = async (req, res, next) => {
  let adminID;

  if (req.headers.authorization) {
    adminID = req.headers.authorization;
  }

  if (!adminID) {
    return next(new ErrorResponse("Not authorized to acces this route", 401));
  }

  try {
    const admin = await Admin.findById(adminID);

    if (!admin) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.admin = admin;
    next();
  } catch (error) {
    next(new ErrorResponse("Not authorized to access this route", 401));
  }
};
