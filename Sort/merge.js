function merge(arr,start,mid,end){
    console.log("arr,start,mid,end",start,mid,end);
    const res = [];
    let left = start;
    let right = mid+1;
    
    while(left<=mid && right <= end){
        if(arr[left] < arr[right]){
            res.push(arr[left]);
            ++left;
        } else {
            res.push(arr[right]);
            ++right;
        }
    }
    while(left <= mid) {
        res.push(arr[left]);
        ++left;
    }
    while(right <= end) {
        res.push(arr[right]);
        ++right;
    }
    for(let i=start;i<end;++i){
        arr[i] = res[i-start];
    }
    console.log(arr);
    return arr;
}

// function mergeSort(arr,start,end){
//     if(start >= end){
//         console.log(arr[start]);
//         return;
//     }
//     var mid = Math.floor((start+end)/2);
//     mergeSort(arr,start,mid)
//     mergeSort(arr,mid+1,end)
    
// }
// console.log(mergeSort([38,27,43,10],0,3));

function mergeSort(arr,start,end){
    mid = Math.floor((start+end)/2);
    console.log("mid",mid)
    if(start >= end){
        console.log(arr[start]);
        return;
    }
    console.log("before mid",mid)
    mergeSort(arr,start,mid)
    console.log("after mid",mid,end)
    mergeSort(arr,mid+1,end)
    merge(arr,start,mid,end);
}

mergeSort([38,27,43,10],0,3);

