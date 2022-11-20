const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();


app.get('/', function(req, res) {

  res.send('hello, world!')

});




const port = 5000;

app.listen(port, () => {
  console.log('Running...')
});
