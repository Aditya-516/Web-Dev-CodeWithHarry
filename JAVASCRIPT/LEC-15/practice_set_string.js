// QUE-1
console.log("aditya\"".length)

// QUE-2
const sentence = "Aditya is a very good boy "
const word = "goods" 
console.log(`"the word "${sentence.includes(word)? 'is' : 'is Not '}"Present in the sentence "`)

//QUE-3
console.log(word.toUpperCase())
console.log(word.toLowerCase())

//QUE-4
let str = "Please Give Me rs 1000"
let amount = str.slice("Please Give Me rs ".length)
console.log("The amount is : ",amount)

//QUE-5
let friend =  "RAMAN"
friend[2] = "2"    // strings are immutable 
console.log(friend)