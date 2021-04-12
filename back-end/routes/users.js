const express = require('express')
const router = require('express-promise-router')()
const passport = require('passport')
const passportConf = require('../passport')
const { validateBody, schemas } = require('../helpers/routehelpers')
const UsersController = require('../controllers/users')

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signup)

router.route('/signin')
    .post(passport.authenticate('local', { session: false}), UsersController.signin)

router.route('/secret')
    .get(passport.authenticate('jwt', { session: false}), UsersController.secret)

module.exports = router