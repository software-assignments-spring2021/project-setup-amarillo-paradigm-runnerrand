const mongoose = require("mongoose");
var reviewSchema = new mongoose.Schema({
    
    rating:{
        type: Number,
        required: true
    },
    description: {
        type: String
    }
})
module.exports = mongoose.model("Review", ReviewSchema)