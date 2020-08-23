const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
var multer = require('multer');

const routes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
    //cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
});

app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));