let arr = [12,23,34,45,56,67,true,false,"aditya","not KNOWn"]
console.log('The lenght of array is :  ', arr.length) 
console.log(arr)

// delete 
delete arr[1]
console.log('The lenght of array is :  ', arr.length) // after using delete the length of array does not changes
console.log(arr)

// concat 
let more_arr = [13,26,39,53,65]
let even_more_arr = [100,200,300,400,500,600,700,800,900]

let new_array = arr.concat(more_arr,even_more_arr)
console.log(new_array)

//sort 

console.log(new_array.sort()) // sorts in alphabetical order determines it as a string arr is a object 

// using a fuction to sort numbers
 let compare = (a,b)=>{
    return a-b
 }
 console.log(new_array.sort(compare))


// splice

let num =[100,200,300,400,500,600 ,700 ,800 ,900]
num.splice(2,4,1000,2000,3000,4000,5000,6000)
console.log(num)

//slice 

console.log(num.slice(3))