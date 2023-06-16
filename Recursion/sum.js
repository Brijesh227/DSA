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

console.log(sum(5));