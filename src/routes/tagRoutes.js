const { Router } = require('express')
const tagController = require('../controllers/tag.controller')
const router = Router()
const Tag  = require('../models/tag')
const { genericMiddleware } = require('../middleware')


router.post('/', genericMiddleware.checkUniqueTag,tagController.createTag);
router.get('/', tagController.getAllTags);
router.get('/:id', genericMiddleware.checkById(Tag, "tag"), tagController.getTagById);
router.put('/:id', genericMiddleware.checkById(Tag, "tag"), tagController.updateTag);
router.delete('/:id', genericMiddleware.checkById(Tag, "tag"), tagController.deleteTag);

module.exports = router