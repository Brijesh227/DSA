var x = 1;
a();                //10
b();                //100
console.log(x);     //1
function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}
// ------------
var arrGetNameFunExpression = function () {             //Function Expression
    console.log("this",this);                           // window object(global)
    console.log("arguments",arguments[0]);              // 1
}

var arrGetName = () => {                                //Arrow Function
    console.log("this",this);                           // arrow function doesn't have its own context so it inherit from lexical scope that's why in browser(window->inherit from binding environment) and nodejs({})
    console.log("arguments",arguments[0]);              // arrow functions do not have their own arguments object. browser(referenceError) in node({}).
}
arrGetNameFunExpression(1);
arrGetName(1);