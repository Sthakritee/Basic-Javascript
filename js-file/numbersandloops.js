/*Random Numbers and ParseInt */
console.log(Math.floor(Math.random()*20));   //Math.random number can give us random numbers between 0 and 1. it can be 0 but never one.
//Math.floor rounds up about the number. We have multiplied by 20 so as to get the random numbers from 0 to 20. but it can never be 20.

//if you have to create a random number between certain numbers.

function randomRange(min , max){
    return Math.floor(Math.random() * (max - min + 1)) + min; //formula for getting the random number.
}
console.log(randomRange(90, 100)); //it gives a number between 90 to 100.

/* ParseInt 
it converts strings into numbers*/

console.log(parseInt("1111" , 8));



/*for loops*/
/*we can run the same code for the multiple of times. */

//syntax
/*for([initialization; [condition]; [final-expression]) {}  //initialization is just run once to set up loop variable 
Condition statement is evaluated in the beginning and keeps going until the condition is false.
final expression is evaluated at the end of iteration and is usually used to increment or decrement. */


var outArray =[];
for(var i = 0; i < 5;i++){
    if(i>2) break; //break statement can be used to stop the loop.
    outArray.push(i);
}
console.log(outArray);


var arr =[10,9,8,7,6]; //for loop can also be used for the variable that already consist some values.
for (var i =0;i<arr.length;i++){
    console.log(arr[i]);
}

var arr2 = [[1,2],[2,3],[5,6]]; //arr2 length is 2 and arr2[i] length is 1
for (var i = 0 ; i <arr2.length ;i++ ){
    for(var j=0 ;j<arr2[i].length;j++){
        console.log(arr2[i][j]);
    }
}



/* While and Do while */
var n = 0;  //it runs the test conditions as long as it is true.
while(n<5){
    n++;
    console.log("n=" + n );

}


var i = 0; //do while loop creates a loop that executes a specified statement until the test conditions evaluates to false.


do{
    i++;
    console.log("i= "+i);
} while(i<5);



/* for ... in / for ... of */
// for (variable in object)
// {
//     statements
// }
// for (variable of object){
//     statement
// }

let person = {fname:"akritee", lname:"shrestha"};

let arr55 = [1,2,9];
arr55.foo="hello";

let text = "";
for(let x in person){
    text = text + person[x];
    console.log(x);
};
console.log(text);



