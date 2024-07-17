/*
    You can use this inside Object to refer current context.
    In function this refer to global
*/


// console.log(this);              // {}(Node)    Window(browser)

// function hello() {
//     let username = "hello";
//     console.log(this);          /* Node environment:
//                                      <ref *1> Object [global] {
//                                         global: [Circular *1],
//                                         queueMicrotask: [Function: queueMicrotask],
//                                         clearImmediate: [Function: clearImmediate],
//                                         setImmediate: [Function: setImmediate] {
//                                           [Symbol(nodejs.util.promisify.custom)]: [Getter]
//                                         },
//                                         structuredClone: [Getter/Setter],
//                                         clearInterval: [Function: clearInterval],
//                                         clearTimeout: [Function: clearTimeout],
//                                         setInterval: [Function: setInterval],
//                                         setTimeout: [Function: setTimeout] {
//                                           [Symbol(nodejs.util.promisify.custom)]: [Getter]
//                                         },
//                                         atob: [Getter/Setter],
//                                         btoa: [Getter/Setter],
//                                         performance: [Getter/Setter],
//                                         fetch: [AsyncFunction: fetch]
//                                     }
                                
//                                 Browser environment:
//                                     Window
//                                 */
//     console.log(username);          // hello
//     console.log(this.username);     // undefined (this refer to global context)
// }
// hello();

const arrHello = () => {
    const username = "hello";
    console.log(this);              // {}(Node)    Window(browser)
    console.log(this.username);     // undefined 
}
arrHello();

// const obj = {
//     name: "ji",
//     hello: function() {
//         console.log(this);      // {name: "ji", hello: ƒ}
//     }
// }