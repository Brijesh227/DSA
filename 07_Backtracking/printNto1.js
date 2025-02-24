// Recursion with backtracking:
// 
// Print N to 1 without using fn(i-1)

let n = 5;

function print(i,N){
    if(i > N) {
        return;
    }
    print(i+1,N);
    console.log(i);
}

// print(1,5);



// Recursion

function recPrint(i,N){
    if(i < 1){
        return;
    }
    console.log(i);
    recPrint(i-1,5);
}

recPrint(5,5);