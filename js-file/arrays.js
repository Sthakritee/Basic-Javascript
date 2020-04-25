/*Array basics */
/* Javascript array variables can store several pieces of data in one place.*/

var fruits = ["pineapple", "guava", "strawberry", "avocado", "grapes", "orange"];

var teams = [["Manchester United",2021],["Real Madrid", 2022], ["Totenham",2032]] //an array can hold different types of data types in the array // this is example of nestes array.

//for accessing the array
console.log(fruits[2]);

fruits[3]="raspberry";
console.log(fruits);

fruits.forEach(function(element){
    console.log(element);
});


//10 common array methods 
//push and pop changes the original array.

var arr =["a","b","c","d","e"]

arr.push("f"); //adds new element to the end of an array.
console.log(arr);

//pop

// console.log(arr.pop()); //pop removes the last element of the array.
// console.log(arr);


//concat       // joins the two arrays and make them one also gives new array and doesn't change the original array.

var arr2 = ["g","h","i","j","k"];
console.log(arr.concat(arr2));
console.log(arr2);

//join      //joins all the elements in the array.
console.log(arr.join("*"))

//reverse
console.log(arr2.reverse()); //reverses the elements of the array.

//shift
console.log(arr2.shift());  //shift removes the first element of the array
console.log(arr2)

//unshift
console.log(arr2.unshift("z")); //unshift adds in the beginning of the element.
console.log(arr2);

//slice
console.log(arr.slice(1,2)); //slice
console.log(arr);

//sort
var arr2 = ["g","h","i","j","k"];
arr2.push("n");
arr2.push("m");

arr2.sort(); //will  sort the numbers or characters in ascending order.
console.log(arr2);

//splice  is very similar to slice but it's going to modify original array instead of new array.

console.log(arr2.splice(2,2,"add it to list" )) //1st argument to remove and 2nd argument is the counting argument to be removed, and 3rd argument will the argument to be replaced.
console.log(arr2);


/*Copying Arrays */
var original = [true, true, undefined,false ,null];

//slice
var copy1 = original.slice(0); //Slice and Spread operator helps to copy the elements of the array when there is no nested arrays or objects in the array.

console.log(copy1);

//spread operator
var copy2 = [...original];
console.log(copy1,copy2);

//Deep copying 
var deepArray = [["Arey bhai yeh kya hai" , 2]];
var shallowCopy = deepArray.slice(0); //

// shallowCopy[0].push("kyu chaiye humko yeh");
// console.log(deepArray[0],shallowCopy[0]);

var deepCopy = JSON.parse(JSON.stringify(deepArray)); //JSON.parse(JSON.stringify(....)) helps to convert Java script or value to a Json string .

deepCopy[0].push("kyu chaiye humko yeh"); 
console.log(deepArray[0],deepCopy[0]); 






