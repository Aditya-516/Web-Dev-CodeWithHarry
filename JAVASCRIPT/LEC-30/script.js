let choice = ['SNAKE', 'WATER', 'GUN']
let randomChoice
// console.log(randomChoice)
let guess
let loop = true
while (loop) {
    guess = prompt("Enter your guess : ")
    randomChoice = choice[Math.floor(Math.random() * choice.length)];
    if (guess == randomChoice) {
        alert(" You Win computer choosed"+ randomChoice)
    }
    else {
        alert("You Loss Computer choosed " +randomChoice )
    }
    loop = confirm("Do you want to play again ? ")
}