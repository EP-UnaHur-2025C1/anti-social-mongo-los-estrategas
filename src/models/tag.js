const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: [true, "El nombre del tag es obligatorio"],
    unique: [true, "Ya hay un tag creado con ese nombre"],
    minlength: [1, "El tag no puede estar vacío"],
    maxlenghth: [30, "El tag debe tener menos de 20 caracteres"]
  }
}, {
  timestamps: false
});

module.exports = mongoose.model('Tag', TagSchema);
