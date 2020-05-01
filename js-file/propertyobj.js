//how to check if the property is an object

var myObject ={
    name: 'Js nuggets'

};
//two native ways to check the property is and object.
//in operator and hasOwnProperty

console.log(myObject.hasOwnProperty('name')); //hasOwnProperty will show true if the keys are directly present.    
console.log('name'in myObject); // in will show true if the property is directly created or it has been inherited from the property chain.

console.log(myObject.hasOwnProperty('valueOf'));  //since the valueOf property is not drectly created in the myObject so the value will be false.

console.log('valueOf' in myObject);//however valueOf is still part of the property so the result will be true.

 

/* setTime0ut and SetInterval*/

var timeoutID= setTimeout(bye,3000);

console.log('hello');
clearTimeout(timeoutID); //clears the time interval provided in the bye function. //bye function will not be called as it has already been cleared.
 function bye(){
     console.log('goodbye');
 }

 //setInterval
 var count = 0
 var intId = setInterval(counter , 1000);
 function counter(){
     console.log(++count)
 }  
