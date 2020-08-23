const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String
    
  },
  image: {
    type: String
    
  },
  category: {
    type: String,
    default: null
    
  },
  store: {
    type: String,
    default:null
    
  },
  date: {
    type: date,
    default:null
  }
  
  
});



// Name
// Id{pk}
// Price
// Category
// Store {id}



const Food = mongoose.model("products", Product);
module.exports = Food;