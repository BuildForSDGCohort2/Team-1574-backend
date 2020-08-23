var cloudinary = require('cloudinary').v2;
require("../../plugins/cloudinary");
let Store = require("../../models/store")

module.exports.addStore = add;

async function add(req,res){

    try{
      cloudinary.uploader.upload(req.files.image.path, async function(error, result) {
        
        let store = new Store({
          name: req.fields.name,
          location: req.fields.location,
          image: result.url,
          coverImage: req.fields.coverImage || "none",
          description: req.fields.description || "none",
          facebook: req.fields.facebook || "none",
          twitter: req.fields.twitter || "none",
          instagram: req.fields.instagram || "none",
          tel1: req.fields.tel1 || "none",
          tel2: req.fields.tel2 || "none",
          about: req.fields.about || "none",
          owner: req.fields.owner || "none",



        });
        result = await store.save();
      
        res.send(result);
      });
      
    }catch(e){
      console.log("error occured");
      res.send("eror");
    }
  
  };

 