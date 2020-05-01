/* promises */
var p = new Promise(function(resolve,reject){
    //do an async task and then
    if(good_condition){
        resolve('success');
    }
    else{
        reject('failure!');

    }
});

p.then(function(){ //then function task is called after the async task is complete. it will do something with the result.

    
})



//Desktop Notification
Notification.requestPermission().then(function(result){
    alert(result);
});

function notifyMe(){
    if(!("Notification in window")){
        alert("this browser doesn't support system notification");
    }
    else if(Notification.permission === "granted"){
        notify();
    }
    else if(Notification.permission !== 'denied')
    {
    Notification.requestPermission(function(permission){
        if (permission === "granted"){
            notify();
        }
    });
    }
    function notify(){
        var notification = new Notification('title of notification',{
          icon: 'http://google.com',
          body: "hey! you are on notice!",
        });

    notification.onclick = function(){
        window.open("https://google.com");

    };
    setTimeout(notification.close.bind(notification), 3000);
    }
    }


   // Immediately Invoked Function Expression
//IIFE is javascript function  which runs as soon as it is defined.


(function(){
    console.log("my favorite color is pale turquoise");
} )();

(favcolor = function(color = "pale_turquoise"){ //to avoid declaring variable in global scope and to create closures.
    console.log("my favorite color is " + color); 
} )();

favcolor("pink");



var a = 2;
(function(){ //this function will be invoked immediately and it passes 3 as the result becaus of the local variable.
    var a = 3;
    console.log(a);
})();
console.log(a); //the value will be 2 because the local variable has no effect on the global variable.


/* block scope */
let b = 2;
{ 
    let b = 3;
    console.log(b);
}
console.log(b);










