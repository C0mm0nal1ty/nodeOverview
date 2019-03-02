/*
node myFile.js


const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//myFile.js
myFile.runContents();


function shouldContinue(){
  //node checks a couple of things
  //Check One: any pending settimeout,setinterval, setintermediate
  //Check Two: any pending OS tasks(server listening to port)
  //Check Three: any pending long running operations (like fs (filesystem) module)
  return pendingtimes.length || pendingOSTasks.length || pendingOperations.length;
}

//entire body executes in 1 'tick'
while(shouldContinue()){

}

After running, node takes the code inside myFile
and executes it.




exit back to terminal.
*/
