const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Debe ser un correo válido']
  }
}, {
  timestamps: false // Igual que en Sequelize, sin createdAt ni updatedAt
});

module.exports = mongoose.model('User', UserSchema);
