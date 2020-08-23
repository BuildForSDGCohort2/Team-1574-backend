var cloudinary = require('cloudinary').v2;
require("../../plugins/cloudinary");
let Product = require("../../models/product")

module.exports.addProduct = add;

async function add(req,res){

    try{
      cloudinary.uploader.upload(req.files.image.path, async function(error, result) {
        
        let product = new Product({
          name: req.fields.name,
          price: req.fields.location,
          image: result.url,
          categorys: req.fields.categorys,
          store: req.fields.store,
          date: new Date.now()
          });
        result = await product.save();
      
        res.send(result);
      });
      
    }catch(e){
      console.log("error occured");
      res.send("eror");
    }
  
  };

 