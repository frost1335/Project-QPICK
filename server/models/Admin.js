const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Admin name "],
  },
  email: {
    type: String,
    required: [true, "Please enter Admin email "],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter Admin password "],
  },
  status: {
    type: String,
    required: [true, "Please enter Admin status"],
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
