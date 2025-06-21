const { Router } = require('express')
const userController = require('../controllers/user.controller')
const router = Router()

router.post('/', userController.createUser);
router.get('/', userController.listUsers);
router.get('/:id', userController.getUser);

module.exports = router