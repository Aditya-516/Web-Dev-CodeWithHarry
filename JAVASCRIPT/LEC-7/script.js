// conditional stateemnts 
// 1- If Else statement 
const prompt = require("prompt-sync")(); // import prompt-sync
let a = prompt("What's your age?");
console.log(typeof a);
a = Number.parseInt(a);
if (a < 0) {
    console.log("This is inValid Age");
}
else if(a>15){
    console.log("You can think of Driving ")
}
else if(a>18){
    console.log("You can drive")
}
else{
    console.log("tmkc")
}
// TERNARY OPERATOR 
console.log(a<18? "Not Drive": "you can Drive ")

// 2-Switch case statement 

let grade = 90; 
switch(true){
    case(grade >= 90):
    console.log("A-Grade");
    break;

    case(grade>70 &&grade<90):
    console.log("B-Grade");
    break;

    case(grade>50 && grade<70):
    console.log("C-Grade");
    break;

    default:
    console.log("FAIL");
}
