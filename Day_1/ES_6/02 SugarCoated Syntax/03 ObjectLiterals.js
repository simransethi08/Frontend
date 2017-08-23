function calcService(){
    var add = ((x,y) => {
        console.log('Addition is '+x+y);

    })
    var multiply = ((x,y) => {
        console.log('Multiplication is '+x*y);
    })
    // // ES 5
    // return{
    //     add:add,
    //     multiply:multiply
    // }

    // ES 6
    return{
        add,
        multiply
    }
}

var c = calcService();
c.add(4,5);
c.multiply(4,5);
