/* Strict Mode  in javascript tightens the rules for certain behavior these restriction keeps the code safer and helps javascript perform optimization .
Two ways to use strict mode
1. by using "use strict"
In strict mode deleting the variable is not allowed

*/
"use strict";
function myFunction(){
    "use strict";
    y = 3.14;
}

//Converting mistakes into errors

var x = 3.14; 
delete x; //deleting the variable is not allowed.

var obj = {};
Object.defineProperty(OBJ, "x", {value : 0,writable : false});
obj.x = 3.14; //we cannot change the value of the non writable variable or else it may cause an error.

var onj ={get x() {return 0}}; //in the get property, we have to get the property we shouldn't be able to change the value of the property.
obj.x = 3.14;

delete Object.prototype; 

function sum(a , a , c){ //function parametes shouldn't have the same variable. should be unique.
    'use strict';
    return a + b+ c;
}


//with and eval changes
var x =17;
with (obj){
    x; 
}


var x = 17;
var evalX = eval("'use strict'; var x = 56;x;"); //x passing in the eval x is different that the x passed in the normalx.
console.assert(x===17);
console.assert(evalX === 42);


//securing javascript







