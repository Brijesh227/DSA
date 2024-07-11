const obj1 = {
    talk(){
        console.log("talking");
    }
}

const obj2 = {
    talk(){
        console.log("talking");
    }
}

// above is bad idea.


// ----- Class based Inheritance ------

class Person {
    talk(){
        console.log("talking");
    }
}

const me = new Person();
me.talk();

console.log(me) // Person { __proto__: 
                            //  talk: f talk()
                            //    constructor: class Person 
                        //}
console.log(Person.prototype) // { constuctor: class Person, 
                              //      talk: f, 
                              //      __proto__ 
                              // }

Person.prototype === me.__proto__    // true

// ------ Function based Inheritance -------

// bad practice coz talk directly assign to Person not to Person.prototype
function Person() {                 
    this.talk = function(){
        console.log("talking");
    }
}
const pme = new Person();
console.log(pme) // Person { 
                 //       talk: f(), 
                 //       __proto__: { 
                 //           constuctor: f Person(), 
                 //       }
                 //   }

console.log(pme.talk())                 // talking
console.log(Person.prototype.talk())    // undefined
console.log(Person.talk())              // undefined

// good practice
function Person(){}
Person.prototype.talk = function(){     
    console.log("talking");
}
const fme = new Person();
me.talk();

console.log(fme) // Person { 
                 //       __proto__: {
                 //           talk: f(),
                 //           constuctor: f Person(),
                 //       }
                 //   }

// Ideal Solution
function Person(age,name){
    this.age = age;             // properties -> what i have?
    this.name = name;
}
Person.prototype.talk = function(){     // methods -> what can i do?
    console.log("talking");
}
Person.prototype.walk = function(){
    console.log("name");
}


// ------------ Inheritance using pure objects with Object.create
const person = {
  talk() {
    return 'Talking';
  }
}
const me = Object.create(person);
me.talk(); // Talking
  
  
// ------------ Inheritance using pure objects with Object.setPrototypeOf
const person = {}
person.__proto__.talk = function (){
  return 'Talking';
}
const me = {};
Object.setPrototypeOf(me, person);
me.talk(); // Talking


const hello = {};
console.log(hello);  { __proto__: Object }