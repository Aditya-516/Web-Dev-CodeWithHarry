// STRING METHODS 
let name = "Aditya"
console.log(name.length)


// To UPPERCASE 
console.log(name.toUpperCase())


// TO LOWERCASE
console.log(name.toLowerCase())


// SLICE METHOD 
console.log(name.slice(2,4))
console.log(name.slice(2))


// REPALCE
console.log(name.replace("Adi","Man"))

//CONCAT 
let friend1 = "Ashish"
let friend2 = "                      Sujit          "

console.log(name.concat(" is Friend of ",friend1,"💕"))
console.log(friend2)
console.log(friend2.trim())

//
let friends = "aditya"+"aniket"+"abhijit"+"krishna"
for(let i=0;i<friends.length;i++){
    console.log(friends[i])
}