console.log("JAVASCRIPT tutorial : var , let , const")
var a = 20 
//var is the old variable declaration keyword. It’s function-scoped, not block-scoped.
{
    var a =  200 
    console.log(a)
}
console.log(20)

let b = 90 
//let is block-scoped, meaning it only exists within {} where it’s declared.
console.log(b)
{
    let b = 900
    console.log(b)
}
console.log(b)
const c = 1000 
// const b  // cannot declare a const without initializing 
console.log(c)
{
    // c = 300 // we cannot change const if once declared 
    console.log(c)
}
console.log(typeof a) // defines type 