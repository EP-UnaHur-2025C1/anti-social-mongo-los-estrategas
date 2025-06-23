const { Router } = require('express')
const userController = require('../controllers/user.controller')
const router = Router()
const User = require('../models/user')
const { genericMiddleware } = require('../middleware')

router.post('/', genericMiddleware.checkUniqueUser, userController.createUser);
router.get('/', userController.listUsers);
router.get('/:id', genericMiddleware.checkById(User, "usuario") ,userController.getUser);

module.exports = router