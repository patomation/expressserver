var Router = require('express').Router()

// module.exports = Router({mergeParams: true})
module.exports = Router
.get('/helloworld', function (req, res) {
  console.log('HELLO WORLD SERVER --------------------------------------------------');
  res.send('hello world')
})
