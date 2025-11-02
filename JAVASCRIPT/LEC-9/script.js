const prompt = require("prompt-sync")();
let sum = 0 ;
let num = prompt("Enter the num : ");
num = Number.parseInt(num);
for(let i=0 ;i<=num;i++){
    sum += i ;
} 
console.log("Total sum : ", sum);

// for in loop
let student = {
    Aditya : 90 ,
    Krishna : 80 ,
    Aniket : 70 ,
    Abhijit : 60
}
for(let a in student){
    console.log("Marks of "+ a +" are "+student[a]);
}

//for of loop

for(a of "aditya"){
    console.log(a);
}