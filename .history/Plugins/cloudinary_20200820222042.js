const cloudinary = require("cloudinary").v2;
require("dotenv").config();
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
  });

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'jomwedding',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
  });
  const parser = multer({ storage });