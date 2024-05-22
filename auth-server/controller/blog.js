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

// const getAllFoods = async (req, res) => {
//   try {
//     const { category } = req.query;

//     if (category === "all") {
//       const foodItems = await Food.find();

//       res.status(200).json({
//         message: "Food item added successfully!",
//         success: true,
//         data: {
//           food: foodItems,
//         },
//       });
//     } else {
//       const foodItems = await Food.find({ category: category });

//       res.status(200).json({
//         message: "Food item added successfully!",
//         success: true,
//         data: {
//           food: foodItems,
//         },
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: "Internal server error",
//       success: false,
//     });
//   }
// };
// const getFoodsFromDistCat = async (req, res) => {
//   try {
//     const distinctCategory = await Food.distinct("category");
//     const distinctfood = await Promise.all(
//       distinctCategory.slice(0,4).map(async(category)=>{
//         const food = await Food.findOne({category});
//         return food;
//       })
//     )


//     res.status(200).json({
//       message: "4 different category food...",
//       success: true,
//       data: {
//         food: distinctfood,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: "Internal server error",
//       success: false,
//     });
//   }
// };
// const getTopRating = async (req, res) => {
//   try {
//     const topRatedFoods = await Food.find().sort({"reviews.rating":-1}).limit(4);
 


//     res.status(200).json({
//       message: "4 different category food...",
//       success: true,
//       data: {
//         food: topRatedFoods,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: "Internal server error",
//       success: false,
//     });
//   }
// };
// const getNewFoods = async (req, res) => {
//   try {
//     const foodItems = await Food.find().sort({ createdAt: -1 }).limit(12);

//     res.status(200).json({
//       message: "Showing 12 registered food...",
//       success: true,
//       data: {
//         food: foodItems,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: "Internal server error",
//       success: false,
//     });
//   }
// };
// const getFoodById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const foodItems = await Food.findById(id);

//     res.status(200).json({
//       message: "Food details.",
//       success: true,
//       data: {
//         food: foodItems,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: "Internal server error",
//       success: false,
//     });
//   }
// };

module.exports = { createBlog,getAllBlogs,blogDelete };
