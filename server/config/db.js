const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.CONNECT_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB connected 👍");
};

module.exports = connectDB;
