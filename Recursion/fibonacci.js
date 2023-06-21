let arr = [0,1];
function fib(n) {   // iterative
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    for(let i=2;i<n;++i){
        arr[i] = arr[i-1] + arr[i-2];
    }
    console.log(arr[n-1]);
}
// fib(6);

function recFib(n){
    if(n === 0) {
        return 0;
    }
    if(n === 1){
        return 1;
    }
    return recFib(n-1) + recFib(n-2);
}

console.log(recFib(3));