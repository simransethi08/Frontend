function calcService(){
    var add = function(x,y){
        console.log('Addition is ');
        console.log(x+y);
    }
    var multiply = function(x,y){
        console.log('Multiplication is '+x*y);
    }
     var subtract = function(x,y){
        console.log('Subtraction is ');
        console.log(x-y);
    }
    var divide = function(x,y){
        console.log('Division is '+x/y);
    }
 
    // ES 6
    return{
        add,
        multiply,
        subtract,
        divide
    }
}

// var c = calcService();
// c.add(4,5);

// Destructuring

// var add = calcService().add;
// console.log(add);
// console.log(multiply);
// add(5,6);

var {add, multiply} = calcService();
console.log(add);
console.log(multiply);
add(5,6);
multiply(5,6);
//subtract(5,6);