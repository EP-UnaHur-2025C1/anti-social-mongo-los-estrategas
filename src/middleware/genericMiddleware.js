const User = require('../models/user')
const Tag = require('../models/tag');

const checkById = (Model, modelName = "Recurso") => async (req, res, next) => {
  const { id } = req.params;
  try{
    const element = await Model.findById(id);
    if (!element) {
      return res.status(404).json({ error: `${modelName} no encontrado` });
    }
    next();
  } catch(error) {
    return res.status(404).json({error: `ID de ${modelName} inválido`})
  }

};

const checkUniqueUser = async (req, res, next) => {
  const { nickName, email } = req.body;
  const errores = [];

  // Buscar usuarios que tengan el mismo nickName o email
  const usuarios = await User.find({
    $or: [ //Encuentra a todos los que tengan el mismo nickName o email 
        { nickName },
        { email }
    ]
    
  });

  usuarios.forEach(user => {
    if (user.nickName === nickName) {
      //Si el nickName ya existe, lo agregamos al array de errores
      errores.push({ atributo: 'nickName', mensaje: 'El nombre de usuario ya está en uso' });
    }
      //Si el email ya existe, lo agregamos al array de errores
    if (user.email === email) {
      errores.push({ atributo: 'email', mensaje: 'El correo electrónico ya está en uso' });
    }
  });
      //Si es mayor a 0, significa que hay errores y lo enviamos al cliente
  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  next();
};


const checkUniqueTag = async (req, res, next) => {
  const { descripcion } = req.body;
  const tagExistente = await Tag.findOne({ descripcion });
  if (tagExistente) {
    return res.status(400).json({ error: 'El tag ya está en uso.' });
  }
  next();
};

module.exports = { checkById, checkUniqueUser, checkUniqueTag };