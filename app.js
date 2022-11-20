const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();


app.use((req, res, next) => {
  console.log(req.method, path.join(__dirname, req.path))
  next()
})

app.get('/', function(req, res) {

  console.log(req.path)

  res.send('hello, world!')

});


app.get('/index.html', function(req, res) {

  const filepath = path.join(__dirname, req.path);

  const fileStream = fs.createReadStream(filepath);


  fileStream
    .on('open', () => {

    fileStream.pipe(res)

  })
    .on('end', () => {
      
      res.end()

    });
})

app.get('/*', function(req, res) {

  const filepath = path.join(__dirname, req.path);

  // check if file exists
  if (!fs.existsSync(filepath)) {
    res.sendStatus(404)
    return
  }

  const fileStream = fs.createReadStream(filepath);

  fileStream
    .on('open', () => {
      fileStream.pipe(res)
    })
    .on('error', () => {
      res
        .sendStatus(404)
        .end();
    })
    .on('end', () => {
      res.end()
    });
})




const port = 5000;

app.listen(port, () => {
  console.log('Running...')
});
