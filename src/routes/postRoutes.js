const { Router } = require('express')
const postController = require('../controllers/post.controller')
const router = Router()
const  Post  = require('../models/post')
const { genericMiddleware } = require('../middleware')


router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', genericMiddleware.checkById(Post, "post"), postController.getPostById);
router.put('/:id', genericMiddleware.checkById(Post, "post"), postController.updatePostImages);
router.put('/:id', genericMiddleware.checkById(Post, "post"), postController.updatePostTags);

module.exports = router