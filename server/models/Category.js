const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter category name"],
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
