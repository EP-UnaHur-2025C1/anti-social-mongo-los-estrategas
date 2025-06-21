const Post = require('../models/Post'); // Asegurate de tener este modelo creado

// Agregar una imagen al post
const addImage = async (req, res) => {
  try {
    const { postId, url } = req.body;

    if (!url || !postId) {
      return res.status(400).json({ error: 'Se requiere postId y url de la imagen.' });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado.' });
    }

    post.images.push(url);
    await post.save();

    res.status(200).json({ message: 'Imagen agregada', images: post.images });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una imagen del post
const deleteImage = async (req, res) => {
  try {
    const { postId, url } = req.body;

    if (!url || !postId) {
      return res.status(400).json({ error: 'Se requiere postId y url de la imagen a eliminar.' });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado.' });
    }

    post.images = post.images.filter(imageUrl => imageUrl !== url);
    await post.save();

    res.json({ message: 'Imagen eliminada', images: post.images });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addImage,
  deleteImage
};
