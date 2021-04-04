#!/usr/bin/env node
const server = require("./app") // load up the web server
const port = 3000 // the port to listen to for incoming requests
// const User = require( './models/User' );

// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})
// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}

// User.findOne({ username: req.body.email }).then(user => {
//   if (user) {
//     return res.status(400).json({error: 'An account already exists with that email. Please use a different email.'})
//   } else {
//     User.create(newUser, function(err, user) {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({error: 'Error creating user. Please try again'});
//       } else {
//         console.log('user', user);
//         console.log('Successfully created user');
//         req.logIn(user, function(err) {
//           if (err) {
//             return res.status(500).json({error: 'Issue with Passport authentication'});
//           }
//           return res.json({success: 'Successfully created user'});
//         });
//       }
//     })
//   }
// })
