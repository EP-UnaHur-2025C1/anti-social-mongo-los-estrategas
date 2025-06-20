const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  textoPost: {
    type: String,
    required: true
  },
  user: { // autor del post
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  images: [{ // URLs de imágenes
    type: String
  }],
  tags: [{ // referencias a etiquetas
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: false // ya tenemos createdAt, no queremos updatedAt por ahora
});

module.exports = mongoose.model('Post', PostSchema);
