//Creating a tiny express server.
//every child has 1 thread available
process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
const crypto = require('crypto');

//first run, determine if file is being executed in master mode?
//
if(cluster.isMaster){
  //if yes, enter this fork,
  //cause index.js to be executed again but in child mode.
  /*
  4 instances can be launched at the same time.
  */
  cluster.fork();
  cluster.fork();
}
else {
  //if not, this is a child. this will act liek a server
  //and nothing else.
  const express = require('express');
  const app = express();

  function doWork(duration){
    //uses maximum CPU during the duration input given
    const start = Date.now();

    while(Date.now() - start < duration){
    }
  }

  app.get('/', (req,res) => {
    // doWork(5000);
    crypto.pbkdf2('a','b',100000,512,'sha512',() => {
      // console.log('2:', Date.now() - start);
      res.send('Hi there');
    });
    // res.send('Hi there.');
  });

  app.get('/fast', (req,res) => {
    // doWork(5000);
    res.send('It\'s fast');
  });

  app.listen(3000);
}
