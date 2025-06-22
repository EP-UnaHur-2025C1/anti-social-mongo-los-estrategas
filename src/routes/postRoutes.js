const { Router } = require('express')
const postController = require('../controllers/post.controller')
const router = Router()
const  Post  = require('../models/post')
const { checkById } = require('../middleware/genericMiddleware')


router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', checkById(Post, "post"), postController.getPostById);
router.put('/:id', checkById(Post, "post"), postController.updatePostImages);
router.put('/:id', checkById(Post, "post"), postController.updatePostTags);

module.exports = router