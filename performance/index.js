//Creating a tiny express server.

const cluster = require('cluster');

//first run, determine if file is being executed in master mode?
//
if(cluster.isMaster){
  //if yes, enter this fork,
  //cause index.js to be executed again but in child mode.
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
    doWork(5000);
    res.send('Hi there.');
  });

  app.listen(3000);
}
