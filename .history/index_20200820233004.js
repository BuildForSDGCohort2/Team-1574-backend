const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
var multer = require('multer');
var Busboy = require('busboy')
const formidableMiddleware = require('express-formidable');
app.use(formidableMiddleware());

path = require('path'),
fs = require('fs');

require("./plugins/cloudinary")
const routes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/upload', (req, res) => {
    req.fields; // contains non-file fields
    req.files; // contains files
  });


//app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));