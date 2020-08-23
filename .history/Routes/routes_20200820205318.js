
const express = require('express');
const router = express.Router();
var cloudinary = require('cloudinary').v2;
require("../plugins/cloudinary");


router.get('/', (req, res) => {
    res.send('An alligator aoooooooooooooooooooooooooooo!');
});

router.post('/', (req, res) => {
    console.log(res)
    //cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
});

module.exports = router;