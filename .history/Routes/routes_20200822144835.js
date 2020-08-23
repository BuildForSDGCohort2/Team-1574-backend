
const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const Store = require("../models/store")
const Product = require("../models/product")

//plugins
require("../plugins/cloudinary");
const addStore = require("./controllers/addStore").addStore
const addProduct = require("./controllers/addProduct").addProduct

//Routes
router.post("/addStore", addStore);
router.post("/addProduct", addProduct);

router.get('/', async(req, res) => {
    let store = await Store.find({})
    try{
      res.send(store);
    }
    catch{
      res.send('error occured');
    }
    
});


module.exports = router;