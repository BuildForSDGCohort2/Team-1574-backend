
const express = require('express');
const router = express.Router();
var cloudinary = require('cloudinary').v2;
let Store = require("../models/store")
//plugins
require("../plugins/cloudinary");





router.get('/', async(req, res) => {
    let store = await Store.find({})
    try{
      res.send(store);
    }
    catch{
      res.send('error occured');
    }
    
});

router.post("/store", async(req,res)=>{
  let store = new Store(req.fields)
  try{
    result = await store.save();
    console.log(req.fields.name)
    res.send(result)
  }catch(e){
    console.log(e)
    res.send(e)
  }

});


router.post('/upload', (req, res) => {
    req.fields; // contains non-file fields
    req.files; // contains files
    cloudinary.uploader.upload(req.files.abu.path, function(error, result) {console.log(result.url, error)});
    res.send(req.files.abu.path)

  });


module.exports = router;