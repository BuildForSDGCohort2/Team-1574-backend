const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
var multer = require('multer');

require("./plugins/cloudinary")
const routes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






const cloudinary = require("cloudinary").v2;
const cloudinaryStorage = require('multer-storage-cloudinary').createCloudinaryStorage;

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





app.post('/', parser.single('image'),(req, res) => {
    console.log(req.file);
  const image = {};
  image.url = req.file.url;
  image.id = req.file.public_id;
    //cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
});


app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));