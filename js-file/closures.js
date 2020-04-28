/*closures is the combination of function and environment within which the function was declared.
closure gives access to an outer functions scope from an inner function.
closure are created everytime a function is created.
*/

function makeFunc(){
    var name = "JS Nuggets";
    function displayName(){ //variable has not been created.
        console.log(name); 
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();