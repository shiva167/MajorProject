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
      const blogs = await Blog.find();
      res.json({ success: true, data: { blogs } });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
  }
};

const blogDelete= async (req, res) => {
  try {
      const blog = await Blog.findByIdAndDelete(req.params.id);
      if (!blog) {
          return res.status(404).json({ success: false, message: 'Blog not found' });
      }
      res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
  }
};

const blogUpdate= async (req, res) => {
  try {
      const { status } = req.body;
      const blog = await Blog.findByIdAndUpdate(req.params.id, { status }, { new: true });
      if (!blog) {
          return res.status(404).json({ success: false, message: 'Blog not found' });
      }
      res.json({ success: true, message: `Blog ${status} successfully`, blog });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
  }
};


module.exports = { createBlog,getAllBlogs,blogDelete,blogUpdate };
