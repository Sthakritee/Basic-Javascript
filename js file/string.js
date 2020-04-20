/*Strings*/
var myName = 'Akritee';

var sentence = "He said \"Hi!\""; // He said Hi!
var senctence = 'he said "Hi!'; //he said Hi!

/*
code Output
\'    single quote
\"    double quote
\\    backslash
\n newline
\t tab
\b backspace 
\f form feed
*/
/*
var fullName = 'Akritee '+ 'Shrestha'; //Akritee Shrestha
var fullName1 = 'My name is ' +  fullName // My name is Akritee Shrestha

fullName1 +='is my name';// Akritee Shrestha is my name


// string values cannot be altered once it is defined.
var firstName = "Akritee";
console.log(firstName[firstName.length- 2]); //ee

var firstName = "Meena";
console.log(firstName[firstName.length- 2]); //na
*/

/*20 string Methods */
var stringOne = "Youtube is the best place to learn "
var stringTwo = "frontend and backend"


//charAt() 
console.log(stringOne.charAt(1)); // o

//charCodeAt()
console.log(stringOne.charCodeAt(1)); //unicode value of o = 111;

//concat() 
console.log(stringOne.concat(stringTwo)); //adds two strings together.

//endsWith() 
console.log(stringOne.endsWith ("learn")) //checks whether the string ends in *learn*

//fromCharCode()
console.log(String.fromCharCode(111)); //here string has been provided instead of the variable to check the unicode values.

//includes() //this check whether the string includes the specified character or not.
console.log(stringOne.includes('end'));

//indexOf()
console.log(stringTwo.indexOf("d"));

//lastIndexOf() gives the last index of the string d
console.log(stringTwo.lastIndexOf("d"));

//match
console.log(stringTwo.match)



