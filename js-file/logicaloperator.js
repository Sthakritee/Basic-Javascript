/* logical operators and short circuit evaluation */
// AND is represented by && and it implies both of the condition to be true in other to be true. 
// OR i represented by || and. it implies either of the condition to be true in other to be true.

var num =6;
if (num > 5){
    if(num <10){
        console.log("Unicycle");
    }
}
//instead of using the nested if statement we can use the logical operator . for example
if (num > 5 && num <10){ 
    console.log("unicycle"); 
}


//Short circuit evaluation happens when the conditionals use and or or. 
//it means that the second argument is only evaluated when the first argument is not enough to determine the value of the expression.
//if one operation of the && is false  overall value of the and operation is false.
// if one operation of the || is true then the whole condition must be true.

if(4>5 && 5>6){ //here the first condition seems to be inaccurate or universally not acceptable so the evaluation took place only of first argument and declared the result as false and output is printed as a big no no.
   console.log("yes")
}else{
    console.log("a big no no")
}

//Operator precedence
 
true || false && false;// returns true, because && is always executed first than || 
(true || false) && false; // returns false, because operator precedence cannot apply.




function westWorld(name){
    name = name || 'Dolores';
    console.log("Westworld's character name is " + name + "!");

}
westWorld();
westWorld('Maeve');

//ternary operator or conditional operator is javascript operator that takes three operands.
//this statement is shortcut for the if statement.
//it tests condition and returns one expression if it is true and another if it is false.


//syntax
//condition ? expr1 : expr2  //if the condition is true expr1 will be output or else expr2 will be the output.

var age = 18;
if (age >=18){
    console.log("you're an adult");
}else{
    console.log("you're a kid")

}

console.log((age>=18)? "you're an adult": "you are a kid");


var stop;
age > 18 ? (
    console.log("ok,you can pass"),
    stop = false

):( 
    console.log("sorry, you're much too young."),
    stop = true
);

var firstOne = false;
var secondOne = false;
access = firstOne ? "access denied" :secondOne ? "ACESS DENIED" : "Access granted" ;
console.log(access);


 




