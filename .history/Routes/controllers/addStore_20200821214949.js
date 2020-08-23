module.exports.addStore = async function(req,res){

    try{
      cloudinary.uploader.upload(req.files.image.path, async function(error, result) {
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
  
  }