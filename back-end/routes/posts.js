const express = require('express')
const router = require('express-promise-router')()
const passport = require('passport')
// const passportConf = require('../passport')
const { validateBody, schemas } = require('../helpers/routehelpers')
const PostsController = require('../controllers/posts')
const posts = require('../controllers/posts')
const Post = require('../models/post')


router.route('/create')
    .post(validateBody(schemas.postSchema),passport.authenticate('jwt', { session: false}), PostsController.create)

router.route('/auth_user')
    .get(passport.authenticate('jwt', { session: false}), PostsController.get_auth_user_posts)

//get all existing posts
router.route('/get')
    .get(PostsController.show_posts)

//get all listings under specific user
router.route("/user/:id").get(async (req, res) => {
   try {
    let findPosts = await Post.find({ author: req.params.id });
    res.json(findPosts);
       
   } catch (error) {
    res.status(500).json({ message: "error: find all listings under specific user" });
   }
    
  });

module.exports = router