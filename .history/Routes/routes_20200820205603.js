
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var cloudinary = require('cloudinary').v2;
require("../plugins/cloudinary");


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.send('An alligator aoooooooooooooooooooooooooooo!');
});

router.post('/', (req, res) => {
    console.log(res)
    //cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
});

module.exports = router;