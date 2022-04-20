const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter model name"],
  },
  categorys: Array,
});

const Model = mongoose.model("Model", modelSchema);
module.exports = Model;
