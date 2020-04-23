switch(new Date().getDay()){
    case 0:
      day = "sunday";
        break;
    case 1:
      day = "monday";
        break;
    case 2:
      day = "tuesday";
        break;
    case 3:
      day = "wednesday";
        break;
    case 4:
      day = "thursday";
        break;
    case 5:
      day = "friday";
        break;
    case 6:
      day = "saturday";
        break;
}
console.log(day)

var host = "Maeve"    //first it evaluates the expression and checks if there are any cases that matches the value of the input expression, if it matches it results that expression.
//if none of the case match then it goes to default statement for the value.
switch(host){
    case 'Maeve':
    case 'Hector':
    case 'Hale':
    case 'Dolores':
    
        console.log('they are the survivors from host world.')
        break;

    case 'Serac':
        console.log("the evil villian who can predict the future of future generation and hates outliers. ")
        break;
    case 'Bernard':
        console.log("Host and human in one's body and was created to stop dolores.")
        break;
    case 'Westworld':
        default:
            console.log('Only two episodes remaining of the last season.')
            break;
    
}