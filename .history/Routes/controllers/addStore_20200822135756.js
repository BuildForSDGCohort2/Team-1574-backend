var cloudinary = require('cloudinary').v2;
require("../../plugins/cloudinary");
let Store = require("../../models/store")

module.exports.addStore = add;

async function add(req,res){

    try{
        console.log(1)
      cloudinary.uploader.upload(req.files.image.path, async function(error, result) {
        console.log(2)
        let store = new Store({
          name: req.fields.name,
          location: req.fields.location,
          image: result.url
        });
        result = await store.save();
      
        res.send(result);
      });
      
    }catch(e){
      console.log("error occured");
      res.send("eror");
    }
  
  };

 