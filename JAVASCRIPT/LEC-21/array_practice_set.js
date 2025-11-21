// QUE-1
const prompt = require("prompt-sync")()
// let a = prompt("Enter the size of Array : ");
// let b = parseInt(a)
// let arr = []
// for(let i=0;i<b;i++){
//     let value = prompt("Enter the element : ")
//     arr.push(value)
// }
// console.log(arr)

//QUE-2
let a 
let arr = [12]  
do{
    a = prompt("Enter the num  :")
    a = Number.parseInt(a)
    arr.push(a)
}
while(a!=0);
console.log(arr)

// QUE-3

let a1 = arr.filter((value)=>{
    return value<10
})
console.log(a1)

//QUE-4

let a2 = arr.map((value)=>{
    return value*value
})
console.log(a2)


//QUE-5
let arr1=[1,2,3,4,5]
let a3 = arr1.reduce((v1,v2)=>{
    return v1*v2
})
console.log(a3)