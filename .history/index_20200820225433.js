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

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
})
app.post('/fileupload', function (req, res) {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

      var saveTo = path.join(__dirname, 'uploads/' + filename);
      file.pipe(fs.createWriteStream(saveTo));
      console.log("Saving")
    });

    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });

    return req.pipe(busboy);   
});


//app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));