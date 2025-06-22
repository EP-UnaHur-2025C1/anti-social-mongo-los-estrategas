const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "El comentario es obligatorio"],
    minlength: [1, "El comentario no puede estar vacío"],
    maxlength: [300, "El comentario debe tener menos de 300 caracteres"]
  },
  estaVisible: {
    type: Boolean,
    default: true
  },
  user: { // Quién comentó
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: { // A qué post pertenece
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: false
});

module.exports = mongoose.model('Comment', CommentSchema);
