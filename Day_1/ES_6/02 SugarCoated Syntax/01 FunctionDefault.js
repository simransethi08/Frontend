// ES 5
// function add(x,y){
//     x = x || 0;
//     y = y || 0;
//     return x+y;
// }

// ES 6
function add(x=0,y=0){
    return x+y;
}

console.log('Result is '+add());
console.log('Result is '+add(4,5));

