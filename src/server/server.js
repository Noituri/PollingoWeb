const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const axios = require('axios')

// create the express app
const app = express()

// create middleware to handle the serving the app
app.use("/", serveStatic(path.join(__dirname, '/public')), express.json())

// Catch all routes and redirect to the index file
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/server', (req, res) => {
  //Check if url is accepted

  switch (req.body.type) {
    case "GETPOLL":
      axios.create({ headers: { "Content-Type": "application/json" } }).post('http://thetahq.klapa.eu:8084/api/getpoll', {
        user: req.body.user,
        uid: req.body.uid
      })
      .then( (response) => {
        res.send(response.data)
      })
      .catch( (error) => {
        // console.log(error);
      });
      break;
    
    default:
      res.send("ERROR")
      break;
    }
})

// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)

// Log to feedback that this is actually running
console.log('Server started on port ' + port)
