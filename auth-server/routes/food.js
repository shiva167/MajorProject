const express = require("express");
const protect = require("../middleware/authMiddleware");
const { createFood, getAllFoods, getFoodById, getNewFoods, getFoodsFromDistCat, getTopRating } = require("../controller/food");

router = express.Router();

router.post("/addfood", createFood);
router.get("/getAllFoods", getAllFoods);
router.get("/getNewFoods", getNewFoods);
router.get("/getToRated", getTopRating);
router.get("/specialFoods", getFoodsFromDistCat);
router.get("/getFood/:id", getFoodById);

module.exports = router;
