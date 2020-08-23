const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formidableMiddleware = require('express-formidable');
const routes = require("./routes/routes");

//plugins
require("./plugins/cloudinary")

const app = express();
mongoose.connect('mongodb+srv://business-online:PapMjqeVwN9TK3i@cluster0.7xbrg.mongodb.net/businessOnline?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidableMiddleware());





app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));