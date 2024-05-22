// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const imageRoute = require("./routes/image");
// const userRoute = require("./routes/user");
// const foodRoute = require("./routes/food");
// const orderRoute = require("./routes/order");
// const blogRoute = require("./routes/blog");

// const cors = require("cors");
// const app = express();
// dotenv.config();
// const port = process.env.PORT || 8000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// // connecting DB

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB);
//     console.log("Connected successfully!");
//   } catch (error) {
//     throw error;
//   }
// };

// mongoose.connection.on("disconnected", () => {
//     console.log ("disconnected");
//     });
//     mongoose.connection.on("connected", () => {
//     console.log("connected");
//     });
//     app.use("/api/v1/all",imageRoute);
//     app.use("/api/v1/user",userRoute);
//     app.use("/api/v1/food",foodRoute);
//     app.use("/api/v1/order",orderRoute);
//     app.use("/api/v1/blog",Route);

//     app.use(express.json({ limit: "3mb" }));

//     app.listen(port, () => {
//     connect();
//     console.log(`Listening from ${port}`);
//     });



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

// Start server
app.listen(port, () => {
  connectDB();
  console.log(`Server listening on port ${port}`);
});
