var Router = require('express').Router()

var output = 'not ready';
// module.exports = Router({mergeParams: true})
module.exports = Router
.post('/text', function (req, res) {
  console.log('POST test --------------------------------------------------');
  console.log(req.body);
  console.log('Python Child Process -----------------------------------------------');
  const spawn = require("child_process").spawn;
  const process = spawn('python', ["./app/python/getNounPhrases.py", "--input", req.body.text])

  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    output = data;

    res.send(`stdout: ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  // res.send('post success')
})
.get('/text', function (req, res) {
  console.log('GET test --------------------------------------------------');
  res.send(output)
})
