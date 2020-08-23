
const express = require('express');
const router = express.Router();
var cloudinary = require('cloudinary').v2;
require("../plugins/cloudinary");




router.get('/', (req, res) => {
    res.send('An alligator aoooooooooooooooooooooooooooo!');
});

router.post('/', (req, res) => {
    upload(req, res, (err) => {
        if(err) {
          res.status(400).send("Something went wrong!");
        }
        res.send(req.file);
      });
    //cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
});

module.exports = router;