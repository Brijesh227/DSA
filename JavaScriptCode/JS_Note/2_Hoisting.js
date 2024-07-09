

// getName();        //hello
// getName2();       //hello undefined
// arrGetNameFun();  //TypeError: arrGetNameFun is not a function
// arrGetName();     //TypeError: arrGetName is not a function
// arrGetName2();    //ReferenceError: Cannot access 'arrGetName2' before initialization
// console.log(x);   //undefined
// console.log(getName); //f getName() { [native code] }

var x = 7;
function getName() {
    console.log("hello");
}

function getName2() {
    console.log("hello",x);
}

var arrGetNameFun = function () {
    console.log("hello from arrow getname",x);
}

var arrGetName = () => {
    console.log("hello from arrow getname",x);
}

let arrGetName2 = () => {
    console.log("hello from arrow getname",x);
}

arrGetNameFun();                // hello from arrow getname 7
arrGetName();                   // hello from arrow getname 7
arrGetName2();                  // hello from arrow getname 7
console.log(x);                 // 7
console.log(getName);           // [Function: getName]
getName();                      // hello
console.log(getName2());        // hello 7
                                // undefined - from console.log