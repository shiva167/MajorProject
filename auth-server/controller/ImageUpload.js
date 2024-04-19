const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dy29iy2qu",
  api_key: "643328929241523",
  api_secret: "8wF5M1oJAVJszWqguIp6nxogzBE",
});

const imageUploadController = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.files.image.path);
    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.log(error);
  }
};


module.exports={imageUploadController};