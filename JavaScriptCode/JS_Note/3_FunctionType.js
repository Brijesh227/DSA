// constructor function

function Person(name) {
    this.name = name;
}
const me = new Person("hello");
console.log(me);
console.log(Person.prototype.name);

// me.prototype  // undefined
// Person.prototype  // { constructor: f },
// Person.prototype === me.__proto__  => true