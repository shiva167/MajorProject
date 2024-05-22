const express = require("express");
const protect = require("../middleware/authMiddleware");
const { createBlog,getAllBlogs,blogDelete } = require("../controller/blog");

router = express.Router();

router.post("/addblog", createBlog);
router.get("/getAllBlogs", getAllBlogs);
router.delete("/blogDelete/:id",blogDelete);
// router.get("/getNewFoods", getNewFoods);
// router.get("/getToRated", getTopRating);
// router.get("/specialFoods", getFoodsFromDistCat);
// router.get("/getFood/:id", getFoodById);

module.exports = router;
