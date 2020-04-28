/*JSON==> JavaScript Object Notation
It is a syntax for storing and exchanging data.
characteristics
*data has the name and value pairs.
JSON value may have different data types like string,array, object,null,boolean etc but it cannot be undefined,function,date.
*/
var myJSON ={
    "name" : {
        "first":"Akritee",
        "last":"Shrestha"
    },
    "age":33,
    "skills":["juggling","stargazing","coding"],
    "married":false,
    "superpowers":null
}

//stringify method
var stringified = JSON.stringify(myJSON); //stringify helps to convert the key value pairs Json values into strings before sending to the server.
console.log(stringified);

//parse method
var stringJSON ='{"name":"Akritee","roll":401,"address": "swayambhu"}';
var myParse = JSON.parse(stringJSON); //JSON.parse is given a string in json format it will convert into javascript object
console.log(myParse);
