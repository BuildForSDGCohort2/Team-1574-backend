
const express = require('./node_modules/express');
const router = express.Router();
var cloudinary = require('cloudinary').v2;

router.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

module.exports = router;