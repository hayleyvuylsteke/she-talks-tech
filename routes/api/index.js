//This file collects all of the API routes and packages them up
const router = require('express').Router()
const userRoutes = require('./user-routes.js')
const blogPostRoutes = require('./blogpost-routes.js')

router.use('/users', userRoutes)
router.use('/blogposts', blogPostRoutes)

module.exports = router;