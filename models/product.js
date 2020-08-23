const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: Number
    
  },
  image: {
    type: String
    
  },
  categorys: {
    type: [String]
    
  },
  store: {
    type: String
    
  },
  date: {
    type: Date,
  }
  
  
});




const product = mongoose.model("products", Product);
module.exports = product;