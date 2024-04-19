const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const imageRoute = require("./routes/image");
const userRoute = require("./routes/user");
const foodRoute = require("./routes/food");
const orderRoute = require("./routes/order");

const cors = require("cors");
const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("Hello World");
});

// connecting DB

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected successfully!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
    console.log ("disconnected");
    });
    mongoose.connection.on("connected", () => {
    console.log("connected");
    });
    app.use("/api/v1/all",imageRoute);
    app.use("/api/v1/user",userRoute);
    app.use("/api/v1/food",foodRoute);
    app.use("/api/v1/order",orderRoute);

    app.use(express.json({ limit: "3mb" }));

    app.listen(port, () => {
    connect();
    console.log(`Listening from ${port}`);
    });
