const JWT = require('jsonwebtoken')
const User = require('../models/user')
const { JWT_SECRET } = require('../configuration/secret')

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

    signin: async (req, res, next) => {

        const token = signToken(req.user)
        res.status(200).json({ token })
        console.log('Login Successful')
    },

    secret: async (req, res, next) => {
        console.log('I managed to get here!')
        res.json({ secret: "resource" })
    }

}