var myCar = new Object();
myCar.make ="ford";
myCar.mpppp = "Mustang";
myCar.color;
console.log(myCar.make);
console.log(myCar.mpppp);

myCar["do i like?"] = "I like chocolate."
console.log(myCar["do i like?"]);  //when there is some quotation in the properties then we can use bracket for accessing the properties.


function showProps(obj,objName){
    var result = "";
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            result +=objName + "."+ i + "=" + obj[i] + "\n";

        }
    }
    return result;
}
console.log(showProps(myCar , "myCar")) ;



//3 ways to create an object
//Creation:Object initializer
//var a = newObject(); //this is the Object Initializer;

//var myHonda = {color:"red", wheels: 4, engines:{cylinders: 4, size:2.2}};

//creation : Constructor function
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

}
var mycar = new Car("BMW","Xseries",1990);
var anotherCar = new Car("toyota","miata",2015);
console.log(mycar.model);
mycar.color = ("black");
console.log(mycar.color);


//creation : object.create

var Animal = {
    type :"Invertebrates",
    displayType : function(){
        console.log(this.type);
    }
}
var animal1 = Object.create(Animal);
animal1.displayType();

var fish = Object.create(Animal);
fish.type = "fishes";
fish.displayType();




//Using objects for lookups //using object we can know what value has been instored in the specific place.

var alpha ={
    1:"Z",
    2:"Y",
    3:"X",
    4:"W"
};
console.log(alpha[2]);


//Removing Object Properties removes the properties from the object.
let dishes ={
    plates:8,
    cups:10,
    forks:28,
    bowls: 13

};
delete dishes.cups;
delete dishes.forks;
console.log(dishes);

//Testing Objects for Properties
//It is useful to check whether the certain properties exist or not.
console.log(dishes.hasOwnProperty('plates'));



//Accessing and modifying Nested Objects
var ourStorage = {
    "desk" : {
        "drawer":"stapler"
    },
    "cabinet":{
        "top drawer":{
            "folder1":"a file",
            "folder2" : "secrets"
        },
        "bottom drawer" : "soda"
    }
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);

//generate an array of all object keys

console.log(Object.keys(ourStorage));







