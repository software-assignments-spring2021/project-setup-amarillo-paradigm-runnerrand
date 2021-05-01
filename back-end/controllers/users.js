const JWT = require('jsonwebtoken')
const User = require('../models/user')
const Post = require('../models/post')
const { JWT_SECRET } = require('../configuration/secret')
const bcrypt = require('bcryptjs')
const fs = require('fs');

signToken = user => {
    return JWT.sign({
        iss: 'RunNErrand',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 2)
    }, JWT_SECRET)
}

module.exports = {
    signup: async (req, res, next) => {
        console.log('UsersController.signup() called!')

        const email = req.value.body.email
        const password = req.value.body.password
        const firstName = req.value.body.firstName
        const lastName = req.value.body.lastName

        // Check for unique email
        const uniqueEmail = await User.findOne({ email: email })
        if (uniqueEmail) { 
            return res.status(403).json({ error: 'Email already in use!'})
        }

        const newUser = new User({ 
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
        await newUser.save()

        // Sign Token
        const token = signToken(newUser)

        // Respond with token
        res.status(200).json({ token: token})
    },

    edit: async (req,res,next) => {
        let query = {'email': req.user.email};

        let email = req.body.email === "" ? req.user.email:req.body.email
        let phone = req.body.phone === "" ? 0:req.body.phone
        let zip = req.body.zip === "" ? 0:req.body.zip

        User.findOneAndUpdate(query, {
            email,
            phone,
            zip
        }, {upsert: false}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.json({status:200,msg:'Succesfully saved.'});
        });
    },

    editAvatar: async (req,res,next) => {

        // multer({ dest: './public/uploads/'}).single('picture')
        // return res.send(req)
        let img = fs.readFileSync(req.file.path);
        let encode_image = img.toString('base64');
        // Define a JSONobject for the image attributes for saving to database
        
        let finalImg = {
            contentType: req.file.mimetype,
            image:  new Buffer.from(encode_image, 'base64')
        };

        let query = {'email': req.user.email};

        // const Photos = mongoose.model('photos')

        // const newUser = new User({ 
        //     avatar: finalImg,
        //     email: "test@324esbt.com",
        //     password: "pwd",
        //     firstName: "fn",
        //     lastName: "ln"
        // })
        // await newUser.save()


        // User.create(finalImg,{})
        User.findOneAndUpdate(query, {avatar:finalImg}, {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully saved.');
        });

    },

    signin: async (req, res, next) => {
        try{
            const token = signToken(req.user)
            res.status(200).json({ token })
            console.log('Login Successful')
        }catch(err){
            res.status(401)
        }
    },

    secret: async (req, res, next) => {
        console.log('I managed to get here!')
        res.json({ secret: "resource" })
    },

    resetPassword: async (req, res, next) => {
        const result = await bcrypt.compare(req.body.oldPassword, req.user.password)
        if(result){

            let query = {'email': req.user.email};

            const salt = await bcrypt.genSalt(10)
            const passwordHash = await bcrypt.hash(req.body.newPassword, salt)

            User.findOneAndUpdate(query, {password:passwordHash}, {upsert: true}, function(err, doc) {
                if (err) return res.send(500, {error: err});
                return res.send('Succesfully saved.');
            });

            res.json({status:200,msg:"Password Updated Successfully"})
        }else{
            res.json({status:401,msg:"Password Incorrect"})
        }
    },
    getBalance: async (req,res,next) => {
        Post.find({'owner':req.user.email,"status":"completed"}).exec(function (err,posts){
            const earnings = posts.reduce( ( sum, { budget } ) => sum + budget , 0)
            Post.find({'author':req.user._id,"status":"completed"}).exec(function (err,posts){
                const spend = posts.reduce( ( sum, { budget } ) => sum + budget , 0)
                res.status(200).json({earnings,spend});
            })
        })
    },

    // get authenticated user data
    data: async (req, res, next) => {
        // const user = await User.findOne({ token: req.token })
        // res.json({ user })
        // res.json({
        //     message: 'You made it to the secure route',
        //     user: req.user,
        //     token: req.query.secret_token
        // })
        let obj = {
            id:req.user._id,
            email:req.user.email,
            firstName:req.user.firstName,
            lastName:req.user.lastName,
        }

        if(req.user.avatar !== undefined){
            obj["avatar"] = req.user.avatar?.image?.toString('base64')
        }
        if(req.user.phone !== undefined){
            obj["phone"] = req.user.phone
        }
        if(req.user.zip !== undefined){
            obj["zip"] = req.user.zip
        }

        res.json(obj)
    }

}
