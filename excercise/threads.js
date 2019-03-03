//Testing single-thread performance in Node
//INSIGHT: THIS IS NOT SINGLE-THREADED.

/*
Explanation
The libuv module is the on the c++ side of Node takes the pbkdf2
function. Hashing process took place on the c++ side.
The libuv library and the node c++ side do expensive calculations
outside by using a thread pool.
thread pool is a series of 4 threads.

In total, there are 5 threads running, 1 for the node event loop,
and 4 in the thread pool.


*/
const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2('a','b',100000,512,'sha512',() => {
  console.log('5:', Date.now() - start);
});



/*

*/

//EOF
