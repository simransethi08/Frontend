const mult = require('./mult');

test('mult 4 * 5 to equal 20', ()=>{
    expect(mult(4,5)).toBe(20);
})