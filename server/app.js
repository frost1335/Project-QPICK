const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");

const errorHandler = require("./middleware/error");

// express app started
const app = express();
dotenv.config();

// mongodb connect
connectDB();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// routes
app.use("/api/category/", require("./routes/category"));
app.use("/api/product/", require("./routes/product"));
app.use("/api/shop/", require("./routes/shop"));
app.use("/api/brand/", require("./routes/brand"));
app.use("/api/admin/", require("./routes/admin"));
app.use("/api/slider/", require("./routes/slider"));
app.use("/api/banner/", require("./routes/banner"));
app.use("/api/buy/", require("./routes/buy"));
app.use("/api/auth/", require("./routes/auth"));

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// server start
const server = app.listen(PORT, () =>
  console.log(`Server has been started on port ${PORT} 👏`)
);

// process.on("unhandledRejection", (err, promise) => {
//   console.log(`Log Error: ${err}`);
//   server.close(() => process.exit(1));
// });
