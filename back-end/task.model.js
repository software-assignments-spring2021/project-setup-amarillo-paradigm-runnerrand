const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    
    title: {
        type: String,
        required: true
    },
    
    category:{
        type: String,
        
        required: true
    }
    
})



module.exports = mongoose.model("Task", TaskSchema)