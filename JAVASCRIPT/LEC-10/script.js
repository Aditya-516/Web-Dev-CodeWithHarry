const prompt = require("prompt-sync")();
let a = prompt("Enter the num : ");
let num  = Number.parseInt(a);
let i = 0 ;
while(i<num){
    console.log(i);
    i++ ;
} 

// Do while LOOP 
let j = 0 ;
do{
    console.log("Aditya is Great");
    j++ ;
}
while(j<5)