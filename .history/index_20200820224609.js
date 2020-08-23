const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
var multer = require('multer');

require("./plugins/cloudinary")
const routes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
})
app.post('/',(req, res) => {
    console.log(req.body)
    res.send(req.body)
    //cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
});


//app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));