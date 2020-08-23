
const express = require('./node_modules/express');
const router = express.Router();
var cloudinary = require('cloudinary').v2;
require("../Plugins/cloudinary");
router.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

router.post('/', (req, res) => {
    cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
});

module.exports = router;