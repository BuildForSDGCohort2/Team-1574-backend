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
          coverImage: req.fields.coverImage,
          description: req.fields.description,
          facebook: req.fields.facebook,
          twitter: req.fields.twitter,
          instagram: req.fields.instagram,
          tel1: req.fields.tel1,
          tel2: req.fields.tel2,
          about: req.fields.about,
          owner: req.fields.owner,



        });
        result = await store.save();
      
        res.send(result);
      });
      
    }catch(e){
      console.log("error occured");
      res.send("eror");
    }
  
  };

 