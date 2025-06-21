const { Router } = require('express')
const postController = require('../controllers/post.controller')
const router = Router()

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePostImages);
router.put('/:id', postController.updatePostTags);

module.exports = router