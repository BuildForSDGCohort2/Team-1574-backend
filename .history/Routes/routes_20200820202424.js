
const express = require('express');
app = express()
const router = express.Router();


app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

module.exports = router;