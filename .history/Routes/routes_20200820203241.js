
const express = require('./node_modules/express');
var cloudinary = require('cloudinary');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

module.exports = router;