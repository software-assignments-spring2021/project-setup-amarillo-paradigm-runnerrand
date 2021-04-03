const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "available"
    },
    title: {
        type: String,
        required: true
    },
    category:{
        type: String,
        
        required: true
    },
    description: String,
    price: String,
    created_date: {
        type: Date,
        default: Date.now
    },
    expire_date: Date,
    payment: String,
    location: String,
    contact: String,
    
})



module.exports = mongoose.model("Task", TaskSchema)