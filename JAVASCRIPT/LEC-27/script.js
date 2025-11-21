alert("Enter the value of a  ")
let a = prompt("Enter the value here : ",9000000)
a = Number.parseInt(a)
alert("You entered the value of a of "+ typeof(a))
let write = confirm("Do you want to write this value in the page ? ")
if(write){
    document.writeln(a)
}
else{
    document.writeln("PlZ allow me to write it !")
}