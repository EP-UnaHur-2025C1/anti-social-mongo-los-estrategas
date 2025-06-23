const Tag = require('../models/tag');

// Crear tag
const createTag = async (req, res) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.status(201).json(tag);
  } catch (err) { res.status(400).json({ error: err.message });}
};

// Obtener todos los tags
const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (err) { res.status(500).json({ error: err.message });}
};

// Obtener un tag por ID
const getTagById = async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    res.json(tag);
  } catch (err) { res.status(500).json({ error: err.message });}
};

// Actualizar un tag
const updateTag = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json(tag);
  } catch (err) { res.status(400).json({ error: err.message });}
};

// Eliminar un tag
const deleteTag = async (req, res) => {
  try {
    await Tag.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tag eliminado' });
  } catch (err) { res.status(500).json({ error: err.message });}
};

module.exports = {
  createTag,
  getAllTags,
  getTagById,
  updateTag,
  deleteTag
};
