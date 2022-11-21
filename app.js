const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();


app.use((req, res, next) => {
  console.log(req.method, path.join(__dirname, req.path).replace(/%20/g," "))
  next()
})

app.get('/', function(req, res) {

  const filepath = path.join(__dirname, '/index.html');

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
});


app.get('/*', function(req, res) {

  let filepath = path.join(__dirname, req.path);

  // replace spaces
  filepath = filepath.replace(/%20/g, ' ');

  // check if file exists
  if (!fs.existsSync(filepath)) {
    console.log('Did not find')
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


const PORT = 5000;

app.listen(PORT, () => {
  console.log('Running...')
});
