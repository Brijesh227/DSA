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
    const factorOfN1 = printAllDivisor(n1);
    const factorOfN2 = printAllDivisor(n2);
    console.log("n1",factorOfN1);
    console.log("n2",factorOfN2);
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

    console.log(factorOfN1.filter((num) => factorOfN2.includes(num)));
    return Math.max(...factorOfN1.filter((num) => factorOfN2.includes(num)));
    
}

console.log(printGCDORHCF(20,40));