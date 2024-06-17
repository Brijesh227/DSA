// "use strict"
// function test(){
//     console.log(this);
// }
// test()

// function hello() {
//     console.log(arguments);
// }
// hello('hi','123')

// const hello = () => {
//     console.log(arguments);
// }
// hello('hi','123')

// const me = {
//     name: "sina",
//     talk() {
//         console.log(this);
//         setTimeout(() => {
//             console.log(this,this.name)
//         },1000);
//     }
// }
// me.talk()

// const you = {
//     name: "sina",
//     talk() {
//         console.log(this);
//         setTimeout(function() {
//             console.log(this.name)
//         },1000);
//     }
// }
// you.talk()

// const obj = {
//     a: "10",
//     b: "20",
//     getA: () => {
//         return this.a;
//     },
//     getB: function() {
//         return this.b;
//     }
// }
// console.log(obj.getA());
// console.log(obj.getB());


var a=10;
var b=20;
const obj = {
    a: -10,
    b: -20,
}
function add() {
    console.log(this.a,this.b);
    console.log(a,b);
    return this.a + b;
}
const add2 = () => {
    console.log(this.a,this.b);
    console.log(a,b);
    return this.a + b;
}
obj.add = add;
obj.add2 = add2;
console.log("add",add());
console.log("add2",add2());
console.log("obj add",obj.add());
console.log("obj2 add2",obj.add2());

// var a = 10;
// var b = 20;
// function add() {
//     console.log(this.a);
//     console.log(b);
//     return this.a + b;
// }
// const add2 = () => {
//     console.log(this.a);
//     console.log(b);
//     return this.a + b;
// }
// console.log("add",add())
// console.log("add2",add2())