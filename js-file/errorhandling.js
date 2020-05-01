/* try catch finally
error handling is used most when working with data from other sources.
try{} method is use to test the block of code for error.
catch{} method is used to handle the error.
throw{} statement let you create custom errors.
finally{} statement let you */  

//try catch only handles run time error.
try{
    console.log('Start of try runs');

    unicycle; //error reaches here and doesn't move to another ine instead it goes directly to catch statement.

    console.log('end of try runs -- never reached');

}
catch(err){
    console.log('error has occured: ' + err.stack); //err object was passed to catch statement and err.stack which shows on which part the error has occured.
}
finally{
    console.log('this is always run');
}
console.log(' ..Then the execution continues');

//parse time error 

//throw error //custom error
let json = '{"age":30}';
try {
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data : no name");
    }
    console.log(user.name);

}
catch(e){
    console.log("JSON error:" + e.message);
}

