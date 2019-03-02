/*
HOW NODE LEVERAGES V8 AND LIBUV LIBRARY

pick a function in node standard libary
find where its implemented in the node soure code
see how v8 and libuv are used to implement that function
*/

/*
pbkdf2 function

How does this function get implemented?
1. javascript code is written
2. nodes javascript side
3. process.binding() connects js and c++ functions
4. It goes to v8 engine
5. nodes c++ side library uses the libuv library
to get access to the underlying OS






*/
