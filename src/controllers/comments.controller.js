const Comment = require('../models/comment'); // Asegurate que exista el modelo mongoose
const Post = require('../models/post')

const createComment = async(req, res) => {
    try {
      const comment = await Comment.create(req.body);
      
      //Va al post correspondiente y le agrega el comentario creado
      await Post.findByIdAndUpdate(
        comment.post,
        { $push: { comments: comment._id } } // Agrega el ID del comentario al array 'comments' de post
      );
      
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
