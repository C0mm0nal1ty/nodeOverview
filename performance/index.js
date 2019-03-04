//Creating a tiny express server.
//New file that will delegate clustering to pm2
const crypto = require('crypto');
const express = require('express');
const app = express();

function doWork(duration) {
  //uses maximum CPU during the duration input given
  const start = Date.now();

  while (Date.now() - start < duration) {}
}

app.get('/', (req, res) => {
  // doWork(5000);
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    // console.log('2:', Date.now() - start);
    res.send('Hi there');
  });
  // res.send('Hi there.');
});

app.get('/fast', (req, res) => {
  // doWork(5000);
  res.send('It\'s fast');
});

app.listen(3000);
