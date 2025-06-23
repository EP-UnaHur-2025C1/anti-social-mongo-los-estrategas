const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: [true, "El nombre del tag es obligatorio"],
    unique: true,
    minlength: [1, "El tag no puede estar vacío"],
    maxlength: [30, "El tag debe tener menos de 20 caracteres"]
  }
}, {
  timestamps: false
});

module.exports = mongoose.model('Tag', TagSchema);
