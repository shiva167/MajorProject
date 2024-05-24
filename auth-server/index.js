const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const imageRoute = require("./routes/image");
const userRoute = require("./routes/user");
const foodRoute = require("./routes/food");
const orderRoute = require("./routes/order");
const blogRoute = require("./routes/blog");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "3mb" }));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
    });
    console.log("Connected successfully to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

// Routes
app.use("/api/v1/all", imageRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/food", foodRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/blog", blogRoute);

// Handle errors globally
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});

// Start server
app.listen(port, () => {
  connectDB();
  console.log(`Server listening on port ${port}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1); // Mandatory (as per the Node.js docs)
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1); // Mandatory (as per the Node.js docs)
});
