const mongoose = require('mongoose');

const Compra = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Compra', Compra);