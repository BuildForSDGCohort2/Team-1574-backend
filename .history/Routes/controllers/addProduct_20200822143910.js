var cloudinary = require('cloudinary').v2;
require("../../plugins/cloudinary");
let Store = require("../../models/product")

module.exports.addStore = add;

async function add(req,res){

    try{
      cloudinary.uploader.upload(req.files.image.path, async function(error, result) {
        
        let store = new Store({
          name: req.fields.name,
          price: req.fields.location,
          image: result.url,
          categorys: req.fields.categorys,
          store: req.fields.store,
          date: new Date.now()
        



        });
        result = await store.save();
      
        res.send(result);
      });
      
    }catch(e){
      console.log("error occured");
      res.send("eror");
    }
  
  };

 