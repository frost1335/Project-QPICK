const mongoose = require("mongoose");

const buySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name ! "],
  },
  surename: {
    type: String,
    required: [true, "Please enter your surename ! "],
  },
  phone: {
    type: Number,
    required: [true, "Please enter your phone number"],
  },
  products: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    default: "bought",
    required: true,
  },
  data: {
    type: String,
    default: Date.now(),
  },
});

const Buy = mongoose.model("Buy", buySchema);

module.exports = Buy;
