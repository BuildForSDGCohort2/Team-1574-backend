const mongoose = require('mongoose');

const Store = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String
    
  },
  image: {
    type: String
    
  },
  description: {
    type: String,
    default: null
    
  },
  facebook: {
    type: String,
    default:null
    
  },
  instagram: {
    type: String,
    default:null
  },
  about: {
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
  coverImage: {
    type: String,
    default:null
    
  },
  owner: {
    type: String,
    default:null
    
  },
  tel1: {
    type: String,
    default:null
    
  },
  tel2: {
    type: String,
    default:null
    
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