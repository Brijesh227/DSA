// const str = "a,b$c";

// function extarctCharacter(str){
//     let temp  = [];
//     for(let i=0;i<str.length;++i){
//         if((str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) || (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)){
//             temp.push(str[i]);
//         }
//     }
//     return temp;
// }

// let charArr = extarctCharacter(str);
// let res = '';
// let cnt = 0;
// for(let i=0;i<str.length;++i){
//     if(charArr.find((e) => e === str[i])){
//         res+=charArr[charArr.length-cnt-1];
//         ++cnt;
//     } else {
//         res+=str[i];
//     }
// }
// console.log("result",res);

//OR

let str = "a,b$c";
function isNormalCharacter(c) {
    return ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122));
}

function swap(str,a,b)
{
    let res="";
    for(var i=0;i<str.length;i++)
    {
        if(i==a)
         res= res+ str[b];
        else
            if(i==b)
                res=res+str[a];
            else
               res=res+str[i];
             
    }
    return res;
}

let low = 0;
let high = str.length-1;
while(low < high) {
    const isLowNormalChar = isNormalCharacter(str[low]);
    const isHighNormalChar = isNormalCharacter(str[high]);
    if(isLowNormalChar && isHighNormalChar){
        str = swap(str,low,high);
        ++low;
        --high; 
    } else if(isLowNormalChar) {
        --high;
    } else {
        ++low;
    }
}
console.log("result",str);
