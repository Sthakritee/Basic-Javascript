/*comparison operators and if else 
*/
// var westWorld = true;
// if (westWorld){
//     console.log(" you are a real person."); //when the condition is true it returns this message.
// }else{
//     console.log("Unfortunately you are a host.")//when the condition is false it returns this message.
// }


//comparison operators  > < <= >= == !=

//always should put the conditions in order. 
// var age = 19;
//  if (age<18)
//  {
//     console.log("ah ah you are a child"); 
     
//  }else if(age>=18 && age<33)
//  {
//     console.log("you're an adult");
//  }
//  else if (age>33)
//  {
//      console.log("you are living in the middle age of your life")
//  }

//  if (age == 18){
//      console.log("you are eighteen");   
//  }
 
//  if (age != 18){    //!= (not equal to sign)
//     console.log("you are not eighteen yet");   
// }


/*Difference between double == and triple === sign
== means abstract equality it gives  
=== strict equality  it will gives result as false if the data types are different.

*/
/*
console.log(3 == "3"); // this one will be true because it converts the string 3 is converted to number 3  before the comparison is made.
console.log(3 === "3");//this one will be false because the datatype of the numbers are different as one is number and another is string.

console.log(true == '1'); // in js, 1 is considered as true so the result will be true.
console.log(true ==='1'); // the 1 is not converted into similar datatype , so the result will be false.

console.log("this is a true." == new String("this is a string.")); 
console.log("this is a string" === new String("this is a string")); //string object is not same as the string literal.\
*/


//Null and Undefined

//Both are datatype in javascript
//undefined means variable has been declared but hasn't been  provided any value.
//undefined is automatically set by not assigning a value but null has to be assigned or done by the programmer in order to get null as the result.


var test 
console.log(test); //hasn't been provided any value so it becomes undefined.
test =null;
console.log(test); //assign to variable as the representation of no value.

console.log(typeof null);
console.log(typeof undefined);

console.log(null === undefined); //=== is the identity operators and null doesn't have the same identity as the undefined .
console.log(null == undefined); // == is the equality operator , and in javascript null and undefined is considered as the 
console.log(null === null); //true 
console.log(null == null); //true
console.log(!null); //true
console.log(!!null); //false
console.log(1 + null); //1
console.log(1 + undefined); //NaN





