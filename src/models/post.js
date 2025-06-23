const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  textoPost: {
    type: String,
    required: [true, "El post es obligatorio"],
    minlength: [1, "El post no puede estar vacío"],
    maxlength: [300, "El post debe tener menos de 300 caracteres"]
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
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: false // ya tenemos createdAt, no queremos updatedAt por ahora
});

module.exports = mongoose.model('Post', PostSchema);
