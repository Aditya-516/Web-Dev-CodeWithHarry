// QUE-1
const prompt = require("prompt-sync")(); // import prompt-sync
let age =prompt("Enter your Age : ");
if(age>=10 && age<=20){
    console.log("Age is  valid")
}
else{
    console.log("Age is NOT Valid")
}

//QUE-2
let fruits = prompt("Enter the Fruits : ")
switch(fruits){
    case("apple"):
    console.log("RED");
    break;

    case("orange"):
    console.log("orange");
    break;

    case("grapes"):
    console.log("green");
    break;

    default:
        console.log("white")
}
//QUE-3
let num = prompt("Enter the Num : ");
if(num%2==0 && num%3==0){
    console.log("Num is div by 2 and 3 ")
}
else{
    console.log("Not Divisible by 2 and 3 ")
}


//QUE-4
let num1 = prompt("Enter the Num-1 : ");
if(num%2==0){
    console.log("Num is divisible by 2 ");
}
else if(num%3==0){
    console.log("Num is divisible by 3 ");
}
else{
    console.log("Number is not divisible by 2 and 3 both ");
}


//QUE-5
let age1 = prompt("Enter the age for Driving : ");
console.log("You Can " , age1>18? "Drive":"Not Drive");