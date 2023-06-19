function swapElement(arr,e1,e2){
    let temp = arr[e1];
    arr[e1]=arr[e2];
    arr[e2]=temp;
}

function insertion(arr,i,j){
    while(i>=0){
        if(arr[i] > arr[j]){
            swapElement(arr,i,j);
        }
        --i;
        --j;
    }
    return arr;
}

// function insertionSort(arr){
//     for(let i=0;i<arr.length-1;++i){
//         for(let j=i+1;j<arr.length;++j){
//             arr = insertion(arr,i,j);
//         }
//     }
//     console.log("arr",arr);
// }


// OR

function insertionSort(arr){
    for(let i=1;i<arr.length;++i){
        let j=i-1;
        let swapindex = i;
        while(j>=0){
            if(arr[j]>arr[swapindex]){
                swapElement(arr,j,swapindex);
            }
            --j;
            --swapindex;
        }
    }
}

insertionSort([12,11,13,5,6]); // O(N^2)
