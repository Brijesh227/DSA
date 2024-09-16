function printAllDivisor(n){
    const divisorArray = []; 
    for(let i=1;i*i<=n;++i){
        if(n%i === 0){
            divisorArray.push(i);
            if((n/i) !== i) {
                divisorArray.push((n/i));
            }
        }
    }
    return divisorArray.sort((a,b) => a-b);
}

// console.log(printAllDivisor(12));

function printGCDORHCF(n1,n2) {
    //const factorOfN1 = printAllDivisor(n1);
    //const factorOfN2 = printAllDivisor(n2);
    //let max = Number.MIN_VALUE;
    // for(let i=0;i<factorOfN1.length;++i){
    //     for(let j=0;j<factorOfN2.length;++j){
    //         if(factorOfN1[i] === factorOfN2[j] && max < factorOfN1[i]){
    //             max = factorOfN1[i];                
    //         }
    //     }
    // }
    // return max;
    // OR
    // return Math.max(...factorOfN1.filter((num) => factorOfN2.includes(num)));

    //OR

    for(let i = Math.min(n1,n2);i>=1;--i){
        if((n1 % i === 0) && (n2 % i === 0)){
            return i;
        }
    }
}
// console.log(printGCDORHCF(9,12));

function printGCDUsingEuclideanAlgorithm(n1,n2){
    // if(n1 === 0){
    //     return n2;
    // }
    // return printGCDUsingEuclideanAlgorithm(Math.abs(n1-n2),Math.min(n1,n2));

    //OR

    while(n1 > 0 && n2 > 0){
        if(n1 > n2) {
            n1 = n1 % n2;
        } else {
            n2 = n2 % n1;
        }
    }
    return n1 === 0 ? n2 : n1;
}

console.log(printGCDUsingEuclideanAlgorithm(52,10));  //log(theta)^min(n1,n2)