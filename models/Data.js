const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, 'no id provided']
  },
  text: {
    type: String,
    trim: true,
    required: [true, 'no joke to add']
  },
  addedAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('Data', JokeSchema);