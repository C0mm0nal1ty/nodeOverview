//Creating a tiny express server.
//this is using the webworker-threads package

const crypto = require('crypto');
const express = require('express');
const app = express();
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
  //create interface
  const worker = new Worker(function() {
    this.onmessage() = function() {
      let counter = 0;

      while(counter < 1e9){
        counter++;
      }
      postMessage();
    }
  });

  //handles any callbacks from the worker thread
  worker.onmessage = function() {

  };

  //
  worker.postMessage();


});

app.get('/fast', (req, res) => {
  res.send('It\'s fast');
});

app.listen(3000);
