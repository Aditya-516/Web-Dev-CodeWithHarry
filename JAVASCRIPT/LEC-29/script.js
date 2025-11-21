let age


const candrive = (age) => {
    return age >= 18 ? true : false
}

let runAgain = true
while (runAgain) {
    age = prompt("Enter your age : ")
    age = Number.parseInt(age)
    
    if(age>7){
        location.href = "https://google.com"
    }

    let color = prompt("Enter the color :")
    document.body.style.background = color 
    if(age<0){
        console.error("Please enter the valid age ! ")
        break;
    }

    if (candrive(age)) {
        alert("Can Drive")
    }
    else {
        alert("Cannot drive")
    }
    runAgain = confirm("Do you want to play again ? ")
}