const Post = require('../models/post')

module.exports = {
    create: async (req, res, next) => {

        const author = req.user._id
        const title = req.value.body.title
        const category = req.value.body.category
        const campus = req.value.body.campus
        const address = req.value.body.address
        const duedate = req.value.body.duedate
        const budget = req.value.body.budget
        const details = req.value.body.details
        const owner = null
        const status = "new"

        // Check for existing post
        const postTitle = await Post.findOne({ title: req.value.body.title })
        if (postTitle) { 
            return res.status(403).json({ error: 'Post already exists!'})
        }

        const newPost = new Post({ 
            author,
            title,
            category,
            campus,
            address,
            duedate,
            budget,
            details,
            owner,
            status
        })
        await newPost.save()

        res.status(200).json({msg:"Post Created Successfully"})
    },
    getPostDetails: async (req,res,next) => {
        Post.findOne({'_id':req.params.id}, (err, post) => {
            if(err) {
              console.log(err);
            } else {
                // res.status(200).json({currentUser: req.user, posts: posts});
                res.status(200).json(post);
            }
        });
    },
    accpetTask: async (req, res, next) => {
        let query = {'_id': req.body.id};
        let owner = req.user.email

        if(req.user._id == req.body.author){
            return res.send(403,{msg:"You cannot accept your own task"})
        }

        Post.findOneAndUpdate(query, {owner,status:"accepted"}, {upsert: false}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send(200,{msg:"Accepted Task"});
        });
    },
    ongoing: async (req,res,next) => {
        Post.find({'owner':req.user.email,"status":{$in: ["accepted","pending-approval"]}}, (err, posts) => {
            if(err) {
              console.log(err);
            } else {
                // res.status(200).json({currentUser: req.user, posts: posts});
                res.status(200).json(posts);
            }
        });
    },
    completed: async (req,res,next) => {
        Post.find({'owner':req.user.email,"status":"completed"}, (err, posts) => {
            if(err) {
              console.log(err);
            } else {
                // res.status(200).json({currentUser: req.user, posts: posts});
                res.status(200).json(posts);
            }
        });
    },
    pendingApproval: async (req,res,next) => {
        let query = {'_id': req.body.id,"owner":req.user.email};

        Post.findOneAndUpdate(query, {status:"pending-approval"}, {upsert: false}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send(200,{msg:"Sent for Approval"});
        });
    },
    markComplete: async (req,res,next) => {
        let query = {'_id': req.body.id};

        Post.findOneAndUpdate(query, {status:"completed"}, {upsert: false}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send(200,{msg:"Approved"});
        });
    },
    get_auth_user_posts: async (req, res, next) => {
        Post.find({'author':req.user._id}, (err, posts) => {
            if(err) {
              console.log(err);
            } else {
                // res.status(200).json({currentUser: req.user, posts: posts});
                res.status(200).json({posts});
            }
         });
    },
    //pagination
    show_posts: async (req, res, next) => {
        console.log("Hello");
        Post.find({}, (err, posts) => {
            if(err) {
              console.log(err);
            } else {
                // res.status(200).json({currentUser: req.user, posts: posts});
                res.status(200).json({posts});
            }
         });
    },

}