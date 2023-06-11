let str = "153";
let sum = 0;
const checkstr = str;
const len = str.length;
for(let i=0;i<len;++i){
    let lastdigit = str % 10;
    sum += Math.floor(lastdigit) * Math.floor(lastdigit) * Math.floor(lastdigit); 
    str = str/10;
}
console.log(String(sum) === checkstr ? "yes" : "no");