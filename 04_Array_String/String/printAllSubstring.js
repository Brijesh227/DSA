function findCount(str){
    let i = 0,j=0;
    for(let k=0;k<str.length;++k){
        if(str[k] = "T") {
            ++i;
        } else {
            ++j;
        }
    }
    return [i,j];
}

var maxConsecutiveAnswers = function(answerKey, k) {
    let max = 0;
    for(let i=0;i<answerKey.length-1;++i){
        for(let j=i+1;j<=answerKey.length;++j){
            let str = answerKey.substring(i,j);
            const [cntT,cntF] = findCount(str);
            if(Math.min(cntT,cntF) <= k){
                max = str.length;
            }
        }
    }
    return max;
};

console.log(maxConsecutiveAnswers("TTFF",2))

// const answerKey = "123";

// for(let i=0;i<answerKey.length;++i){
//     for(let j=i+1;j<=answerKey.length;++j){
//         console.log(answerKey.substring(i,j));
//     }
// }

// 1
// 12
// 123
// 2
// 23
// 3