var cloudinary = require('cloudinary').v2;
require("../../plugins/cloudinary");
let User = require("../../models/user")

module.exports.addUser = add;

async function add(req,res){

    try{
      cloudinary.uploader.upload(req.files.image.path, async function(error, result) {
        
        let user = new User({
          name: req.fields.name,
          email: req.fields.email,
          image: result.url,
          facebook: req.fields.facebook,
          linkedin: req.fields.linkedin,
          twitter: req.fields.twitter,
          profession: req.fields.profession,
          tel: req.fields.tel,
          date: new Date()
          });
        result = await user.save();
      
        res.send(result);
      });
      
    }catch(e){
      console.log("error occured");
      res.send("eror");
    }
  
  };

 