
let multiplySimple = function(x,y){
    return x*y;
}
console.log('Multiplication using simple fun '+multiplySimple(4,5));


let multiply = (x,y) => x*y;
console.log('Using Arrow Function '+multiply(4,5));

//.dll
function showResult(callback){
    console.log('Result is '+callback(4,5));
}

// .exe
function myFun(a,b){
    return a+b;
}
//showResult(myFun);
//showResult(function(a,b){return a-b;});// using anonymous method
showResult((a,b)=>a*b);// using arrow function

let newMultiply = (x,y) =>{
        console.log('Inside newMultiply');
        return x*y;
}

console.log('Multiplication is '+newMultiply(5,6));
