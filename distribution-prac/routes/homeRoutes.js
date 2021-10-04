const router = require('express').Router()
const homeController = require('../controllers/homeControllers')

router.get('/', homeController.main)
router.post('/test', homeController.test)


module.exports = router