const Admin = require("../models/Admin");
const ErrorResponse = require("../utils/ErrorResponse");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new ErrorResponse("Please provide an email and a password", 400)
    );
  }

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatch = admin.password === password;

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    res.status(200).json({ success: true, data: admin });
  } catch (error) {
    next(error.message);
  }
};
