const router = require('express').Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('https://intense-lake-37547.herokuapp.com/register', userController.register)

router.post('https://intense-lake-37547.herokuapp.com/login', userController.login)

router.get('https://intense-lake-37547.herokuapp.com/logout', userController.logout)

router.get('https://intense-lake-37547.herokuapp.com/refresh_token', userController.refreshToken)

router.get('https://intense-lake-37547.herokuapp.com/infor', auth, userController.getUser)

router.patch('https://intense-lake-37547.herokuapp.com/addcart', auth, userController.addToCart)

router.get('https://intense-lake-37547.herokuapp.com/history', auth, userController.history)

module.exports = router
