// let cnt = 0;
// function print(n){
//     if(cnt === n){
//         return;
//     }
//     console.log("brijesh");
//     cnt++;
//     print(n);
// }

// OR

// function print(i,n){
//     if(i>n){
//         return;
//     }
//     console.log("brijesh");
//     print(++i,n); // try print(i++,n) for different result
// }

// print(1,3);

// let i=0;
// function print1ToN(n){
//     if(i == n){
//         return;
//     }
//     console.log(i+1);
//     ++i;
//     print1ToN(n);
// }

// print1ToN(5);


function printNTo1(n){
    if(n === 0){
        return;
    }
    console.log(n);
    --n;
    printNTo1(n);
}

printNTo1(5);