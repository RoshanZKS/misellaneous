//write a JS program to check two numbers and return true
// one of the number us 100 or if the sum of the numbers is 100

const isEqualto100 = (a,b)=>{
    return   a===100 || b === 100 || (a+b) === 100
}

console.log(isEqualto100(10,10))
console.log(isEqualto100(10,500))