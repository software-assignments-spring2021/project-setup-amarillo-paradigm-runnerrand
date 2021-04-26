const express = require('express')
const router = require('express-promise-router')()
const passport = require('passport')
const passportConf = require('../passport')
const { validateBody, schemas } = require('../helpers/routehelpers')
const UsersController = require('../controllers/users')
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signup)

router.route('/signin')
    .post(passport.authenticate('local', { session: false}), UsersController.signin)

router.route('/edit')
    .post(passport.authenticate('jwt', { session: false}), UsersController.edit)

router.route('/balance')
    .get(passport.authenticate('jwt', { session: false}), UsersController.getBalance)

router.route('/reset-password')
    .post(passport.authenticate('jwt', { session: false}), UsersController.resetPassword)

router.route('/edit-avatar')
    .post(passport.authenticate('jwt', { session: false}), multer({ dest: './public/uploads/'}).single('picture'), UsersController.editAvatar)

router.route('/auth_user')
    .get(passport.authenticate('jwt', { session: false}), UsersController.data)

router.route('/secret')
    .get(passport.authenticate('jwt', { session: false}), UsersController.secret)

module.exports = router
