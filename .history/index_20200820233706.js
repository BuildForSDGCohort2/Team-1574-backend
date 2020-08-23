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


app.post('/upload', (req, res) => {
    req.fields; // contains non-file fields
    req.files; // contains files
    cloudinary.uploader.upload(req.files, function(error, result) {console.log(result, error)});
    res.send(req.files)

  });


//app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));