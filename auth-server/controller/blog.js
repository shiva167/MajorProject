const Blog = require("../model/Blog");

const createBlog = async (req, res) => {
  try {
    // console.log(req.body);
    // const { name, price, description, category, weight, foodImage } = req.body;
    console.log(req.body);
    const newBlog = new Blog(req.body);
    const saveBlog = newBlog.save();
    res.status(200).json({
      message: "blog item added successfully!",
      success: true,
      data: {
        blog: saveBlog,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};
const getAllBlogs = async (req, res) => {
  try {
    const blogItems = await Blog.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order

    res.status(200).json({
      message: "Blogs fetched successfully!",
      success: true,
      data: {
        blog: blogItems,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};
const blogDelete=async (req, res) => {
  try {
      const { id } = req.params;
      await Blog.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: 'Blog post deleted successfully!' });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete blog post', error });
  }
};


module.exports = { createBlog,getAllBlogs,blogDelete };
