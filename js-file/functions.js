/* functions */
/* Function is a javascript procedure, a set of statements that performs 
the task or calculates the value. To use a function you must define it somewhere
 in the scope which you want to call it.

 It consist the keyword *function* in it to declare the function and also should have the *name* of the function.
 
 
*/

//for example
function squareone(number) //number are called arguments which are going to pass onto the function, these are called parameters.
//variables that act as placeholders for the values that are to be input into a function. We are going to input those arguments into the function.
{
    return number * number; 
} 
console.log(squareone(4)); //result will be 16


var someVar = "Corona";//global variable
function myFun(){
    var someVar = "virus" //local variable
    console.log(someVar);
}
 myFun(); //virus //the result will be virus because in the function we have taken the local variable which overrides the value of the global variable. 
 //*local variable is not accesible outside the function.
 console.log(someVar); //here the result will be *corona* because this variable is no longer inside the function and takes the global variable.



/*Nesting of funtion within the function 
Nesting function is putting function within the function. The inner function or nested function is private to it's containing outer function.
Closure is the combination of a function bundled together, it gives  access to outer functions scope from an inner function*/

console.log(addSquare(3,4));

function addSquare(a,b){
    function square(x){
        return x * x;
    }
    return square(a) + square(b);

}
a = addSquare(4,3); // returns 25
b = addSquare(3,1);//returns 10
c = addSquare(4,5);//return 41




