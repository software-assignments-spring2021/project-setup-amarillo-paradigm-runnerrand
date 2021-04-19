const express = require('express')
const router = require('express-promise-router')()
const passport = require('passport')
// const passportConf = require('../passport')
const { validateBody, schemas } = require('../helpers/routehelpers')
const PostsController = require('../controllers/posts')


router.route('/create')
    .post(validateBody(schemas.postSchema),passport.authenticate('jwt', { session: false}), PostsController.create)

router.route('/auth_user')
    .get(passport.authenticate('jwt', { session: false}), PostsController.get_auth_user_posts)

router.route('/get')
    .get(PostsController.show_p·osts)

module.exports = router