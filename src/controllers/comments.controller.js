const Comment = require('../models/comment'); // Asegurate que exista el modelo mongoose

const createComment = async (req, res) => {
  try {
    
    const { userId, postId, content } = req.body

    //Si el comentario esta vacio
    if (!content) {
      return res.status(400).json({ error: 'El comentario no puede estar vacio'})
    }

    //Si no se especifico el usuario o el post
    if (!userId || !postId) {
      return res.status(400).json({ error: 'Se debe indicar quien creo el comentario y a que post pertenece'})
    }

    const comentario = new Comment({
      content,
      user: userId,
      post: postId
    })

    await comentario.save()
    res.status(201).json(comentario)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getComentarios = async (_, res) => {
  try {
    const comentarios = await Comment.find()
    res.json(comentarios)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getComentarioById = async (req, res) => {
  try {
    const comentario = await Comment.findById(req.params.id)
    if (!comentario) return res.status(404).json({ error: 'Comentario no encontrado.' })
    res.json(comentario)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  createComment,
  getComentarios,
  getComentarioById
};
