const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config()
const formidableMiddleware = require('express-formidable');
const routes = require("./routes/routes");

//plugins
require("./plugins/cloudinary")

const app = express();
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidableMiddleware());





app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));