/*
node myFile.js


const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//new timers,tasls,operations are reported from my file running
myFile.runContents();


function shouldContinue(){
  //node checks a couple of things
  //Check One: any pending settimeout,setinterval, setimmediate
  //Check Two: any pending OS tasks(server listening to port)
  //Check Three: any pending long running operations (like fs (filesystem) module)
  return pendingtimes.length || pendingOSTasks.length || pendingOperations.length;
}

//entire body executes in 1 'tick'
while(shouldContinue()){
//1.Node looks at pendingTimers and sees if
//any functions are ready to be called (setTimeout or setInterval)
//2. Node looks at pendingOSTasks and pendingOperations
//and calls relevant callbacks
//3. pause execution continue when some number of events occur
// - pending OS tasks
// - pending operation is done
// - a timer is about to complete
//4. Look at pendingTimers(setImmediate) call any setImmediate
//5. handle any close events ?
// - this handles cleanup - memory cleanup, thread terminations
//
//

}

After running, node takes the code inside myFile
and executes it.

exit back to terminal.
*/
