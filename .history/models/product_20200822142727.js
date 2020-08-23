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
  category: {
    type: String
    
  },
  store: {
    type: String
    
  },
  date: {
    type: Date,
  }
  
  
});




const Food = mongoose.model("products", Product);
module.exports = Food;