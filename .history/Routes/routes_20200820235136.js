
const express = require('express');
const router = express.Router();
var cloudinary = require('cloudinary').v2;
require("../plugins/cloudinary");




router.get('/', (req, res) => {
    res.send('halo');
});

app.post('/upload', (req, res) => {
    req.fields; // contains non-file fields
    req.files; // contains files
    cloudinary.uploader.upload(req.files.abu.path, function(error, result) {console.log(result.url, error)});
    res.send(req.files.abu.path)

  });


module.exports = router;