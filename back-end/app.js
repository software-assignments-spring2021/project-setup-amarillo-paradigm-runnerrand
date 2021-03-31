// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
// we will put some server logic here later...


// use the morgan middleware to log all incoming http requests
// app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

// use the bodyparser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"))


app.get("/", (req, res) => {
  res.send("Hello!")
})

app.post('/post-task', (req, res) => {
  const newTask = {
    status: "success!",
    message: "congratulations on send us this data!",
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

// export the express app we created to make it available to other modules
module.exports = app