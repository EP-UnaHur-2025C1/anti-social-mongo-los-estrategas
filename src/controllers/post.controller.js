const Post = require('../models/post');

//BORRAR?
const User = require('../models/user');
const Tag = require('../models/tag');
const Comment = require('../models/comment');

// Crear post con descripción e imágenes opcionales
const createPost = async (req, res) => {
  try {
    const { userId, description, images = [], tags = [] } = req.body;

    const post = new Post({
      user: userId,
      description,
      images,
      tags
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos los posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('user', 'nickName email')
      .populate('tags', 'name')
      .lean();

    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener detalle del post + comentarios filtrados por antigüedad
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const meses = parseInt(process.env.MAX_COMMENT_AGE_MONTHS || 6);
    const fechaLimite = new Date();
    fechaLimite.setMonth(fechaLimite.getMonth() - meses);

    const post = await Post.findById(id)
      .populate('user', 'nickName')
      .populate('tags', 'name')
      .populate({
        path: 'comments',
        match: { createdAt: { $gte: fechaLimite } },
        populate: { path: 'user', select: 'nickName' }
      });

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Agregar o quitar imágenes
const updatePostImages = async (req, res) => {
  try {
    const { id } = req.params;
    const { images } = req.body; // array completo actualizado

    const post = await Post.findByIdAndUpdate(
      id,
      { images },
      { new: true }
    );

    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Asociar o desasociar etiquetas
const updatePostTags = async (req, res) => {
  try {
    const { id } = req.params;
    const { tags } = req.body; // array completo actualizado

    const post = await Post.findByIdAndUpdate(
      id,
      { tags },
      { new: true }
    ).populate('tags', 'name');

    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostImages,
  updatePostTags
};

