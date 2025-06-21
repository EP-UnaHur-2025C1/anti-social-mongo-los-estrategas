const { Router } = require('express')
const tagController = require('../controllers/tag.controller')
const router = Router()

router.post('/', tagController.createTag);
router.get('/', tagController.getAllTags);
router.get('/:id', tagController.getTagById);
router.put('/:id', tagController.updateTag);
router.delete('/:id', tagController.deleteTag);

module.exports = router