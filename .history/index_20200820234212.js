const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');

const formidableMiddleware = require('express-formidable');

require("./plugins/cloudinary")
const routes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidableMiddleware());

const cloudinary = require("cloudinary").v2;

require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
  });


app.post('/upload', (req, res) => {
    req.fields; // contains non-file fields
    req.files; // contains files
    cloudinary.uploader.upload(req.files.abu.path, function(error, result) {console.log(result, error)});
    res.send(req.files.abu.path)

  });


//app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));