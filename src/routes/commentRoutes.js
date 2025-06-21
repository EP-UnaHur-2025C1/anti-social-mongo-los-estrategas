const { Router } = require('express')
const commentController = require('../controllers/comments.controller')
const router = Router()

router.post('/', commentController.createComment);
router.get('/', commentController.getComentarios);
router.get('/:id', commentController.getComentarioById);

module.exports = router