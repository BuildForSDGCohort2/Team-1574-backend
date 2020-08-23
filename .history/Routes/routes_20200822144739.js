
const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const Store = require("../models/store")
const Product = require("../models/product")

//plugins
require("../plugins/cloudinary");
const addStore = require("./controllers/addStore").addStore
const addProduct = require("./controllers/addProduct").addProduct


router.post("/addStore", addStore);
router.post("/addStore", addProduct);

router.get('/', async(req, res) => {
    let store = await Store.find({})
    try{
      res.send(store);
    }
    catch{
      res.send('error occured');
    }
    
});

router.post('/upload', (req, res) => {
    req.fields; // contains non-file fields
    req.files; // contains files
    cloudinary.uploader.upload(req.files.abu.path, function(error, result) {console.log(result.url, error)});
    res.send(req.files.abu.path)

  });


module.exports = router;