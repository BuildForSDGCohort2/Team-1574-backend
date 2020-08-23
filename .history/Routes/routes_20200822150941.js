
const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const Store = require("../models/store")
const Product = require("../models/product")
const USer = require("../models/user")

//plugins
require("../plugins/cloudinary");

//controllers
const addStore = require("./controllers/addStore").addStore
const addProduct = require("./controllers/addProduct").addProduct
const addUser = require("./controllers/addUser").addUser

//Routes
router.post("/addStore", addStore);
router.post("/addProduct", addProduct);
router.post("/addUser", addUser);

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