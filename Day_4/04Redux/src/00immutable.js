var a = {name:"Abhijeet",things:[0,1,2]};

//var b = Object.assign({},a);
var b = Object.assign({},a,{name:"Ashish"});

// console.log(a);
// console.log(b);

// b.things = a.things.concat(3,4);
// console.log(a.things);
// console.log(b.things);

// b.things = a.things.filter((val)=> val!=2);
// console.log(a.things);
// console.log(b.things);

//Object.assign, filter, concat, map, reduce always going
// to return brand new object

// and hence keep your original object immutable
