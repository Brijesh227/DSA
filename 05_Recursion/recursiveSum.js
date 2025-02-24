let sm=0;
let cnt=0;
function sum(n){
    if(n === cnt) {
        return sm;
    }
    cnt++;
    sm+=cnt;
    return sum(n);
}

// console.log(sum(5));

function improvedSum(n) {
    if(n === 1){
        return n;
    }
    return n + improvedSum(n-1);
}

console.log(improvedSum(10));