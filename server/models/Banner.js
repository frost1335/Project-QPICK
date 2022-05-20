const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
  img: {
    type: Array,
    required: [true, "Please upload banner img"],
  },
});

const Banner = mongoose.model("Banner", bannerSchema);
module.exports = Banner;
