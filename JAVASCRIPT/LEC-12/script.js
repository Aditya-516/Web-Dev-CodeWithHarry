const prompt = require("prompt-sync")();
const marks = {
    TOC : 90 ,
    SPOS : 93 ,
    CNS : 97 ,
    IOT : 98 ,
    DBMS : 99
}

// QUE-1
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("MArks For ",Object.keys(marks)[i]," Are : ",marks[Object.keys(marks)[i]])
}

// QUE -2 
for(let a in marks){
    console.log("Marks for ",a,"are : ",marks[a])
}

//QUE-3
let num1 = 10 ;
let num ;
while(num1!=num){
    num = prompt("Enter the correct NUM : ");
    console.log("try again")
}
console.log("You have entered the correct number")

//QUE-5

let a = 10 ;
let b = 20 ;
let c = 30 ;
let d = 40 ;
let e = 50 ;

const mean=(v,w,x,y,z)=>{
    return (v+w+x+y+z)/5;
}

console.log("The mean of Num : ",mean(a,b,c,d,e));