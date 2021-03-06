const router = require('express').Router()
const errorController = require('../controllers/errorControllers')

router.use(errorController.logErrors)
router.use(errorController.respondNoResourceFound)
router.use(errorController.respondInternalError)

module.exports = router