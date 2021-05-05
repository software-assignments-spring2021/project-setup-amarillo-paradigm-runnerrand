// import and instantiate express
const express = require("express") // CommonJS import style!

const app = express() // instantiate an Express object
const cors = require('cors')  // Enable CORS for localhost API proxy access

// import some useful middleware
const bodyParser = require("body-parser") // middleware to help parse incoming HTTP POST data
// const upload = multer({ dest: "uploads/" });
const axios = require("axios") // middleware for making requests to APIs
require('dotenv').config(); // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const mongoose = require('mongoose');
// we will put some server logic here later...
//const User = require('./User')

const taskRouter = require("./task.model")
//const Plan = mongoose.model("Plan");
//<script type="module" src="../front-end/src/Home.js"></script>

// Enable cross-site scripting
app.use(cors())

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded st yle

// use the bodyparser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// MongoDB Env Key
const mongo_uri = process.env.MONGODB_KEY; 

// MongoDB Setup
mongoose.Promise = global.Promise

mongoose.connect(mongo_uri, {useUnifiedTopology:true, useNewUrlParser:true})
	.then((resolved) => console.log('Database CONNECTED'))
	.catch((err) => console.log(err) );

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Routes
app.use('/users', require('./routes/users'))
app.use('/posts', require('./routes/posts'))


// Default Page
app.get("/", (req, res) => {
  res.send("Hello!")
})

// Test Page
app.get('/test', async (req, res) => {
  res.json({message: 'Alive'})
})


app.post('/post-task', (req, res, next) => {
  const newTask = {
    status: "success!",
    message: "congratulations on sending us this data!",
    data: {
      title: req.body.title,
      category: req.body.category,
      address: req.body.address,
      duedate: req.body.duedate,
      budget: req.body.budget,
      details: req.body.details,
    },
  }
  res.json(newTask)
})

// export the express app we created to make it available to other modules
module.exports = app
