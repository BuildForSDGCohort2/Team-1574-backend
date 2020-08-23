const mongoose = require('mongoose');

const Store = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  location: {
    type: Number,
    default: null
    
  },
});

const Food = mongoose.model("store", Store);
module.exports = Food;