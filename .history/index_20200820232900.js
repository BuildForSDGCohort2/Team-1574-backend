const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
var multer = require('multer');
var Busboy = require('busboy')
path = require('path'),
fs = require('fs');

require("./plugins/cloudinary")
const routes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));