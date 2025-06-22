const { Router } = require('express')
const commentController = require('../controllers/comments.controller')
const router = Router()
const Comment  = require('../models/comment')
const { checkById } = require('../middleware/genericMiddleware')

router.post('/', commentController.createComment);
router.get('/', commentController.getComentarios);
router.get('/:id', checkById(Comment, "comentario"), commentController.getComentarioById);

module.exports = router