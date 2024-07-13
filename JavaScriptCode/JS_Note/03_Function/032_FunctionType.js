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


// Factory function

function createPerson(name) {
    return {
        name: name,
        talk: function() {
            console.log(`Hi, I am ${name}`);
        }
    }
}

const me2 = createPerson("ji");
me2.talk();

/*
    why need this we directly create object instead
    const me2 = {
        name: "ji",
        talk: function() {
            console.log(`Hi, I am ${name}`);
        }
    }
    me2.name = "notji"
    me2.talk()  // Hi, I am notji(we expose name to outside)
*/