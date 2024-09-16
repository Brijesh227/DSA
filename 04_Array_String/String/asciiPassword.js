const str = "796115110113721110141108";
let revstr = str.split("").reverse().join("");
let processedNumber = 2;
let res = "";
for(let count=0;count<str.length;count+=processedNumber){
    let substr = revstr.slice(0,processedNumber);
    if((substr >=65 && substr <= 90) || (substr >=97 && substr < 100) || substr === 32) {
        res+=String.fromCharCode(substr);
        revstr = revstr.replace(substr,"");
    } else {
        processedNumber = 3;
        substr = revstr.slice(0,processedNumber);
        if((substr >=100 && substr <= 122)) {
            res+=String.fromCharCode(substr);
            revstr = revstr.replace(substr,"");
        }
    }
    processedNumber = 2;
}
console.log(res);