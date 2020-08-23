const mongoose = require('mongoose');

const Store = new mongoose.Schema({
  name: {
    type: String
  },
  location: {
    type: String
    
  },
  image: {
    type: String
    
  },
});

// Name
// Id{pk}
// Categories
// Description
// Contacts
// About
// Image URL
// Cover image URL
// Location
// Owner {user id / email}




const Food = mongoose.model("store", Store);
module.exports = Food;