// function orderArray(arr,n) {
//     if(arr.length === n){
//         return;
//     }
//     console.log(arr[n]);
//     n++;
//     orderArray(arr,n)
// }

// orderArray([1,2,3],0)

function reverseArray(arr,n) {
    if(n === 0){
        return;
    }
    console.log(arr[n-1]);
    --n;
    reverseArray(arr,n)
}

//OR

function swapElement(arr,e1,e2){
    let temp = arr[e1];
    arr[e1]=arr[e2];
    arr[e2]=temp;
}

function reverseArrayUsingTwoPointer(arr,left,right) {     // reverse using two pointer and recursion
    if(left >= right){
        console.log(arr);
        return;
    }
    swapElement(arr,left,right);
    reverseArrayUsingTwoPointer(arr,left+1,right-1);
}

// reverseArrayUsingTwoPointer([1,2,1,4,3],0,4);

function reverseArrayUsingOnePointer(arr,left) {     // reverse using one pointer and recursion
    if(left >= arr.length-left-1) {
        return arr
    }
    swapElement(arr,left,arr.length-left-1);
    return reverseArrayUsingOnePointer(arr,left+1);
}

console.log(reverseArrayUsingOnePointer([1,2,1,4,3],0));