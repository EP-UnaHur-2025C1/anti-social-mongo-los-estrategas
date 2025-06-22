const { Router } = require('express')
const userController = require('../controllers/user.controller')
const router = Router()
const User = require('../models/user')
const { checkById } = require('../middleware/genericMiddleware')

router.post('/', userController.createUser);
router.get('/', userController.listUsers);
router.get('/:id', checkById(User, "usuario") ,userController.getUser);

module.exports = router