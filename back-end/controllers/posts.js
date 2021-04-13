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
            details
        })
        await newPost.save()

        res.status(200).json({msg:"Post Created Successfully"})
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

}