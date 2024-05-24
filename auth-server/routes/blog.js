const express = require("express");
const protect = require("../middleware/authMiddleware");
const { createBlog,getAllBlogs,blogDelete,blogUpdate} = require("../controller/blog");

router = express.Router();

router.post("/addblog", createBlog);
router.get("/getAllBlogs", getAllBlogs);
router.delete("/blogDelete/:id",blogDelete);
router.patch('/updateStatus/:id',blogUpdate);

module.exports = router;
