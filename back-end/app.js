// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object

// import some useful middleware
const bodyParser = require("body-parser") // middleware to help parse incoming HTTP POST data
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const mongoose = require('mongoose');

// we will put some server logic here later...
//const User = require('./User')

//<script type="module" src="../front-end/src/Home.js"></script>


// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

// use the bodyparser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
//app.use("/static", express.static("public"))
//app.use("/static", express.static("/../front-end/src"))
//app.use(express.static(path.join(__dirname, '/../front-end/scr')));
//app.use(express.static(path.join(__dirname, '/../client/public')))

//variables of route path
//var homeRouter = require("/../front-end/src/Home.js");

app.get("/", (req, res) => {
  res.send("Hello!")
})

//app.get("/Home", homeRouter)

// route for HTTP GET requests to /json-example
app.get("/json-example", (req, res) => {
  // assemble an object with the data we want to send
  const body = {
    title: "Hello!",
    heading: "Hello!",
    message: "Welcome to this JSON document, served up by Express",
    imagePath: "/static/images/donkey.jpg",
  }

  // send the response as JSON to the client
  res.json(body)
})

app.post('/post-task', (req, res, next) => {
  const newTask = {
    status: "success!",
    message: "congratulations on sending us this data!",
    data: {
      taskTitle: req.body.title,
      taskID: req.body.task_id,
      taskCategory: req.body.category,
      taskAddress: req.body.address,
      taskDueDate: req.body.dueDate,
      taskBudget: req.body.budget,
      taskContact: req.body.contact,
      taskRemarks: req.body.remarks,
    },
  }
  res.json(newTask)
})

app.post('/register', (req, res, next) => {
  if (req.body.password_confirm !== req.body.password) {
		return res.status(400).json({error: 'The passwords entered are not the same!'});
  }
  else{
    const newUser = {
      status: "success!",
      message: "congratulations on sending us this data!",
      data: {
        username: req.body.username,
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
        passwordconfirm: req.body.password_confirm
      },
    }
    res.json(newUser)
    console.log(newUser)
    // User.findOne({ username: req.body.email }).then(user => {
		// 	if (user) {
		// 		return res.status(400).json({error: 'An account already exists with that email. Please use a different email.'})
		// 	} 
    //   else {
		// 		User.create(newUser, function(err, user) {
		// 			if (err) {
		// 				console.log(err);
		// 				return res.status(500).json({error: 'Error creating user. Please try again'});
		// 			} else {
		// 				console.log('user', user);
		// 				console.log('Successfully created user');
		// 				req.logIn(user, function(err) {
		// 					if (err) {
		// 					  return res.status(500).json({error: 'Issue with Passport authentication'});
		// 					}
		// 					return res.json({success: 'Successfully created user'});
		// 				});
		// 			}
		// 		})
			// }
		// })
  }
})

app.post('/log-in', (req, res, next) => {
  const logIn = {
    status: "success!",
    message: "congratulations on sending us this data!",
    data: {
      username: req.body.username,
      password: req.body.password,
    },
  }
  res.json(logIn)
})

// route for HTTP POST requests for /upload-task
// app.post("/upload-task", (req, res, next) => {
//   // check whether anything was uploaded
//   if (req.task) {
//     // success! send data back to the client, e.g. some JSON data
//     const data = {
//       status: "all good",
//       message: "yup, the files were uploaded!!!",
//       task: req.task,
//     }
//     res.json(data) // send respose
//   }
// })

// proxy requests to/from an API
app.get("/proxy-example", (req, res, next) => {
  // use axios to make a request to an API for animal data
  axios
    .get("https://my.api.mockaroo.com/animals.json?key=d9ddfc40&num=10")
    .then(apiResponse => res.json(apiResponse.data)) // pass data along directly to client
    .catch(err => next(err)) // pass any errors to express
})

// same route as above, but using environmental variables for secret credentials
app.get("/dotenv-example", (req, res, next) => {
  // insert the environmental variable into the URL we're requesting
  axios
    .get(`${process.env.API_BASE_URL}?key=${process.env.API_SECRET_KEY}&num=10`)
    .then(apiResponse => res.json(apiResponse.data)) // pass data along directly to client
    .catch(err => next(err)) // pass any errors to express
})

// export the express app we created to make it available to other modules
module.exports = app