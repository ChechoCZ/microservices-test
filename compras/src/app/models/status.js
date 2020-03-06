const mongoose = require('mongoose');

const Status = new mongoose.Schema({
  status: {
    type: String,
    required: true
  },
  compra_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Compra'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Status', Status);