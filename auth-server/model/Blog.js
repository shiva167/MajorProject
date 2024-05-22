const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    foodImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Blog", blogSchema);


