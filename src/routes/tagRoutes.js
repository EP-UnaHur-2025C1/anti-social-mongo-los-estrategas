const { Router } = require('express')
const tagController = require('../controllers/tag.controller')
const router = Router()
const Tag  = require('../models/tag')
const { checkById } = require('../middleware/genericMiddleware')


router.post('/', tagController.createTag);
router.get('/', tagController.getAllTags);
router.get('/:id', checkById(Tag, "tag"), tagController.getTagById);
router.put('/:id', checkById(Tag, "tag"), tagController.updateTag);
router.delete('/:id', checkById(Tag, "tag"), tagController.deleteTag);

module.exports = router