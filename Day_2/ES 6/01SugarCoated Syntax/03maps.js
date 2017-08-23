// The map object is a simple key/value map.
// Any value (both objects / primitive types)
// may be used as a key or as a value

var s = 5;
let m = new Map();

m.set('hello',44);
m.set(s,34);
console.log(m.get(s));
console.log(m.get('hello'));
console.log(m.get(s)===34);
console.log(m.get('hello')===44);
console.log(m.size === 2);

var keyString = 'a string';
var keyObj = {};
var keyFunc = function(){};

m.set(keyString,"Value associated with 'a string' ");
m.set(keyObj,"Value associated with 'an object' ");
m.set(keyFunc,"Value associated with 'a function' ");

console.log(m.size === 2);
console.log('\nKey    Value');
for(let [key,val] of m.entries()){
    console.log(key +' = '+val);
}