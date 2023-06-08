//console.log(hoist)
// hoist = "hello" //ReferenceError: hoist is not defined
// var hoist = "hello" //undefined
//let hoist="hello" //ReferenceError: Cannot access 'hoist' before initialization

// var number = 10;
// function hello() {
//     console.log("this",this.number);
//     console.log("inner num",number);
//     number = 20;
//     console.log("this",this.number);
// }
// console.log("outer up",number);
// hello();
// console.log("outer down",number);

// var number = 10;
// {
//     console.log("this",this.number);
//     console.log("inner num",number);
//     var number = 20;
//     console.log("this",this.number);
// }
// console.log("outer up",this.number);
// console.log("outer down",number);

// var double = 22;
// function double(num) {
//   return (num*2);
// }
// console.log(typeof double); // Output: number
//ref: https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript

// let number = 10;
// function hello() {
//     console.log(number);
//     // let number = 20;
// }
// hello();

// var a = 10;
// var b = 20;
// function add() {
//     return this.a + b;
// }
// const add2 = () => {
//     return this.a + b;
// }
// const obj = {
//     a: -10,
//     b: -20,
//     add() {
//         return this.a + b;
//     },
//     add2: () => {
//         return this.a + b;
//     }
// }
// // obj.add = add;
// // obj.add2 = add2;
// // console.log("add",add());
// // console.log("add2",add2());
// console.log("obj add",obj.add());
// console.log("obj2 add2",obj.add2());

// function hello(){
//     console.log(this);
// }
// hello();

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


// function createBase(base){
//     return function(n) {
//         return base + n;
//     }
// }

// var add = createBase(6);
// add(10);

// var b= 10;
// {
//     var b= 100;
//     console.log("in",b);
// }
// console.log("out",b);
// console.log("out this",this.b);

// var b= 10;
// function show(){
//     var b= 100;
//     console.log("in",b);
// }
// show()
// console.log("out",b);
// console.log("out this",this.b);

// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//         console.log(this.b);
//     }
// }
// var b = 20;
// a();


// var a = 10;
// function b() {
//     console.log("upper",a);
//     a = 15;
//     console.log("lower",a);
//     return;
//     //function a() {}
// }
// b();
// console.log(a);

// function check() {
//     glob = 10;
//     var glob = 10;
// }
// check();
// console.log(glob);

// {
//     glob = 20;
// }
// console.log(glob);