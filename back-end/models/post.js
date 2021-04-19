const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const postSchema = new Schema({
    author:{
        type: Schema.Types.ObjectId, ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    owner: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    campus:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    duedate: {
        type: Date, 
        default: Date.now
    },
    budget:{
        type: Number, 
        required: true
    },
    details:{
        type:String,
        required: true
    }
})

const Post = mongoose.model('post', postSchema)

module.exports = Post