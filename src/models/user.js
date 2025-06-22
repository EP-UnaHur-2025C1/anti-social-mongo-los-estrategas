const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: [true, "El nombre de usuario es obligatorio"],
    unique: [true, "El nombre de usuario ingresado no está disponible"],
    minlength: [3, "El nombre de usuario debe tener al menos 3 caracteres"],
    maxlength: [20, "El nombre de usuario debe tener menos de 20 caracteres"]
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: [true, "El correo ingresado pertenece a un usuario existente"],
    match: [/.+@.+\..+/, 'Debe ser un correo válido']
  }
}, {
  timestamps: false // Igual que en Sequelize, sin createdAt ni updatedAt
});

module.exports = mongoose.model('User', UserSchema);
