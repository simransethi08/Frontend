// var x = 10;// number
// var x = 'A';// string
// var x= "ABC";// string

// var x = 1;
// console.log('Before '+x);
// for(var x=0;x<5;x++)
//     {
//         console.log('Inside Loop '+x);
//     }
// console.log('After '+x);

// let x = 1;
// console.log('Before '+x);
// for(let x=0;x<5;x++)
//     {
//         console.log('Inside Loop '+x);
//     }
// console.log('After '+x);


// function foo()
// {
//     {
//         var t = 6;// function level scope
//         console.log('t '+t);
//     }
//     console.log('t '+t);
// }


// function foo()
// {
//     (function()
//     {
//         var t = 6;// function level scope but at IIFE
//         console.log('t '+t);
//     })();// IIFE

//     console.log('t '+t);
// }

function foo()
{
    {
        let t = 6;// block level scope
        console.log('t '+t);
    }
    
    console.log('t '+t);
}

foo();


