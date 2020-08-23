const mongoose = require('mongoose');

const Store = new mongoose.Schema({
  name: {
    type: String
  },
  location: {
    type: String,
    default: null
    
  },
});

const Food = mongoose.model("store", Store);
module.exports = Food;