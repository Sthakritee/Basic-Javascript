/* hoisting
variable declaration and function declaration are processed before any code is executed so declaring a variable or function anywhere is
 equivalent to declaring at the top.
  i.e. variable and function can appear to be used before they're declared, this  behaviour is called hoisting.
  */

console.log(definedLater); // the output has been taken before declaring so the value will be undefined.
var definedLater;
definedLater = 'I am defined'
console.log(definedLater) // the output will be I am defined because it has taken output after variable has been declared.

console.log(definedSimultaneously); //undefined because variable declaration has been done below and doesn't have access until it is defined.
var definedSimultaneosly = 'i am defined';
console.log(definedSimultaneosly); // i am defined will be the output because it variable has been called after the declaration.

doSomethingElse(); //
function doSomethingElse(){
console.log(' oops i did it again');
}                       // 22 Uncaught TypeError: functionVar is not a function

/*to make things easier to read ,declare all your variable at the top of your function scope. 
define the variables before to use them.
but define the function at the bottom of the scope to keep them out of the way.*/
