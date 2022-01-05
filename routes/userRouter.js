const router = require('express').Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('https://intense-lake-37547.herokuapp.com/user/register', userController.register)

router.post('https://intense-lake-37547.herokuapp.com/user/login', userController.login)

router.get('https://intense-lake-37547.herokuapp.com/user/logout', userController.logout)

router.get('https://intense-lake-37547.herokuapp.com/user/refresh_token', userController.refreshToken)

router.get('https://intense-lake-37547.herokuapp.com/user/infor', auth, userController.getUser)

router.patch('https://intense-lake-37547.herokuapp.com/user/addcart', auth, userController.addToCart)

router.get('https://intense-lake-37547.herokuapp.com/user/history', auth, userController.history)

module.exports = router
