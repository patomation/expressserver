var Router = require('express').Router()

//NOTE: This may or may not be breaking things
// module.exports = Router({mergeParams: true})
module.exports = Router
.post('/contact/submit', function (req, res) {
  console.log(req.body);
  res.send('hello submit')
})
