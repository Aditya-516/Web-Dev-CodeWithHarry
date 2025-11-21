let arr = [12,24,36,48,60,72,84,96,108,120]

//Normal for loop 
for(let i=0;i<arr.length;i++){
    console.log(arr[i]*arr[i])
}

// For each loop
arr.forEach ((element) => {
    console.log(element*element)
})

// Array.from() 
let a = "aditya"
console.log(a)
// converts any objetc to an array 
let newarr = Array.from(a) 
console.log(newarr)

// for-of

for(let i of newarr){
    console.log(i)
}

// for-im
for(let items in newarr){
    console.log(items)     // gives keys of the items because arrays are the objects 
}