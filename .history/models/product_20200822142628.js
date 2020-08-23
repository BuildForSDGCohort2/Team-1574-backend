const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: String
    
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



// Name
// Id{pk}
// Price
// Category
// Store {id}



const Food = mongoose.model("products", Product);
module.exports = Food;