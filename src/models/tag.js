const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: false
});

module.exports = mongoose.model('Tag', TagSchema);
