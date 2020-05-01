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

/*this 
this is the object that owns the javascript code.
the value of this when used in function is the object that owns the function.
the object used in object is object itself.
when this is used outside this refers to global object.*/

console.log(this.document === document);
console.log(this === window);
this.a =37;
console.log(window.a);


function f2() {
    //'use strict' //if we use sctrict like this the window value won't be same as the function f2(). 
    return this;
}
console.log(f2===window); //when the function is not in the strict mode it will be true.


function add(c,d){
    return this.a +this.b +c+d;
}
var o = {a:1, b:3};
console.log(add.call(o,5,7)); //call() method calls a function with a given this value and arguments provided individually.
console.log(add.apply(o,[10,15])); //apply() method is same as that of call but the fundamental difference is that it only takes array as value.


//bind method
function f(){
    return this.a;  
}
var g = f.bind({a:'unicycle'}); //bind() // 
console.log(g());
 var h = g.bind({a:'thiswontrun'});
 console.log(h());
 
 var o = {a:8 ,f:f, g:g, h:h};
 console.log(o.f(),o.g(),o.h); 


 //arrow function
 var o ={traditionalFunc: function(){
     console.log('traditionaleFunc this === o?',this === o);
    },
    arrowFunc:()=> {
        console.log('arrowFunc this === o?', this === o);
        console.log('arrowFunc this === window?',this === window);
    }
};
o.traditionalFunc();
o.arrowFunc();


//
var u = {
    prop :37,
    f: function() {
        return this.prop;

    }
};
console.log(u.f());

var y = {prop:89 };
function canbeanything() {
    return this.prop;
}
y.e = canbeanything;
console.log(y.e());





