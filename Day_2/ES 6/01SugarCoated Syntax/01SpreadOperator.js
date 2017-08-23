// Spread Operator
// spreading of elements of an iterable collection
//(array or even string) into both literal elements and 
// individual function parameters.

var arr1 = [0,1,2];
var arr2 = [3,4,5];

arr1 = [...arr1, ...arr2];

for(let i in arr1)
    {
        console.log(arr1[i]);
    }

var str = "foo";
var chars = [...str];
console.log(str+' '+chars);