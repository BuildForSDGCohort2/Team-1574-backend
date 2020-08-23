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

app.post('/fileupload', function (req, res) {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

      var saveTo = path.join(__dirname, 'uploads/' + filename);
      file.pipe(fs.createWriteStream(saveTo));
      busboy.on('field', function(fieldname, val) {
        var s = [fieldname, val]
        });
      
    });

    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });
    console.log(s)
    return req.pipe(busboy);   
});


//app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));