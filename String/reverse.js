let str = "10400"; // out : 401
let out = "";
const len = str.length;
for(let i=0;i<len;++i){
    let lastdigit = str % 10;
    if(lastdigit !== 0 ) out+=Math.floor(lastdigit);
    str = str/10;
}
console.log(out);

// str = str.split("").reverse().join("");
// console.log("str",str);