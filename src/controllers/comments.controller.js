const Comment = require('../models/comment'); // Asegurate que exista el modelo mongoose

const createComment = async(req, res) => {
    try {
      const comment = await Comment.create(req.body);
      res.status(201).json(comment);
    } catch (err) { res.status(400).json({ error: err.message });}
};

const getComentarios = async (_, res) => {
  try {
    const comentarios = await Comment.find()
    res.json(comentarios)
  } catch (err) { res.status(500).json({ error: err.message })}
}

const getComentarioById = async (req, res) => {
  try {
    const comentario = await Comment.findById(req.params.id)
    res.json(comentario)
  } catch (err) { res.status(500).json({ error: err.message })}
}

module.exports = { createComment, getComentarios, getComentarioById };
