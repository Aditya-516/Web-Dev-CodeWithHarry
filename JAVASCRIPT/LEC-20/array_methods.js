// map method
let arr = [12,24,36,48,60,72,84,96,108,120]
let a = arr.map((value,index,array)=>{
    console.log(value,index,array)      //creates a new array 
    return value+1
})
console.log(a)

// filter method 
let arr1 = [24,57,69,36,48,52,17,895,63,1,89,21,46]
let a2 = arr1.filter((value) => {               // creates new array 
    return value<50
})
console.log(a2)

// Reduce method 

let arr2 = [14,45,89,69,43,61,53]
let a3 = arr2.reduce((b1,b2)=>{                // return a new  value 
    return b1 + b2
})
console.log(a3)