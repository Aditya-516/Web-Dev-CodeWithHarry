const prompt = require("prompt-sync")()
var a = Math.floor(Math.random()*100)+1;
let chances = 0 
do {
    chances+=1
    var b = prompt("Guess the num : ")
    b = Number.parseInt(b)
    if (b == a) {
        console.log("Correct Guess")
        console.log("No of Chances : ",chances)
        console.log("The num is : ",a)
    }
    else if (b > a) {
        console.log("Wrong Guess , the num is smaller")
    }
    else {
        console.log("Wrong Guess , the num is Bigger")
    }
}
while (a != b)