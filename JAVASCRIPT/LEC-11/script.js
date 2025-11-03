//Normal function 
function oneplusavg(x,y){
    return Math.round(1 + (x+y)/2)
}
let a = 10 ;
let b = 20 ;
let c = 30 ;
console.log("One plus avg of a and b is : " , oneplusavg(a,b))
console.log("One plus avg of b and c is : " , oneplusavg(b,c))
console.log("One plus avg of a and c is : " , oneplusavg(a,c))

// Arrow Function

const sum =(p , q)=>{
    return p+q
}
console.log("The Sum of A and B is : " , sum(a,b))

const hello=()=>{
    console.log("Hey how are you ? Aditya Here.... ")
    return "hi"
}
hello();
let v = hello();
console.log("The value of V is : ",v)