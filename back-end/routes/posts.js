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

//get all scheduled listings under specific user
router.route("/user/:id/scheduled").get(async (req, res) => {
    try {
     let findPosts = await Post.find({ author: req.params.id,status:"posted" });
     res.json(findPosts);
        
    } catch (error) {
     res.status(500).json({ message: "error: find scheduled listings under specific user" });
    }
   });
//get all completed listings under specific user
router.route("/user/:id/completed").get(async (req, res) => {
    try {
     let findPosts = await Post.find({ author: req.params.id,status:"completed" });
     res.json(findPosts);
        
    } catch (error) {
     res.status(500).json({ message: "error: find completed listings under specific user" });
    }
   });

//create new post
router.route("/new").post(async (req, res) => {
  // try {
    const L = {
        author: req.body.author,
        status: req.body.status,
        title: req.body.title,
        owner:req.body.owner,
        campus: req.body.campus,
        category: req.body.category,
        address: req.body.address,
        duedate: req.body.duedate,
        budget:req.body.budget,
        details: req.body.details,
      };
    let newPost = await Post.create(L);
    res.json(newPost);   
   //} catch (error) {
    //res.status(500).json({ message: "error: find all listings under specific user" });}
  });

module.exports = router