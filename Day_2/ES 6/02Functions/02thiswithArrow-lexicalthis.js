// function Person(){
//     this.age = 0;// this is refering to Person

//     setInterval(function growUp(){
//         this.age++;// this is refering to method of setInterval
//         console.log(this.age);        
//     },1000);
// };

// ES5
// function Person(){
//     var self = this;
//     self.age = 0;

//     setInterval(function growUp(){
//         self.age++;// this is going to Person's age
//         console.log(self.age);        
//     },1000);
// };

//ES6 - Arrow Function
// Arrow function doesn't create its own context, so this has its original
// meaning from the enclosing context - Person
function Person(){
  this.age = 0;
    setInterval(()=>{
        this.age++;// this is going to Person's age
        console.log(this.age);
    },1000);
};

var p1 = new Person();
console.log('Age '+p1.age);