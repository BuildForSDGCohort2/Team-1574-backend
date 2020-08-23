const mongoose = require('mongoose');

const USer = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String
    
  },
  profession: {
    type: String
    
  },
  tel: {
    type: String,
    default: null
    
  },
  facebook: {
    type: String,
    default:null
    
  },
  linkedin: {
    type: String,
    default:null
  },
  
  twitter: {
    type: String,
    default:null
    
  },
  image: {
    type: String,
    default:null
    
  },
  storeUrls: {
    type: [String],
    default: ["my store"]
    
  },
  categorys: {
    type: [String]
    
  }
});






const Food = mongoose.model("store", Store);
module.exports = Food;