let arr = [12,23,34,45,56,"aditya","jaggu",true,false,undefined]
console.log(arr)

// change to a string 
let b = arr.toString()
console.log(typeof b , b )

// use join 
let c = arr.join("___")
console.log(typeof c , c )

// use pop
let p = arr.pop()
console.log("Popped element : ", p)

// use push
arr.push(1000000)
console.log("After pushing the element at the end  : ",arr)

//use shift 
arr.shift() // removes first element and returns it return length of array 

console.log("After using shift : ",arr)

// use unshift 
arr.unshift(12000000000) // adds the element at the beginning of the array and returns the length of array
console.log(arr)