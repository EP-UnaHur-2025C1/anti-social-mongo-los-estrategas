const User = require('../models/user'); // Asegurate que exista el modelo mongoose


const createUser = async (req, res) => {
  try {      // Crear el usuario
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) { res.status(400).json({ error: err.message });}
};


//Busca usuario por ID
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) { res.status(500).json({ error: err.message });}
};

//Retorna todos los usuarios
const listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) { res.status(500).json({ error: err.message });}
};

module.exports = { createUser, getUser, listUsers };
