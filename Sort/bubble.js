function swapElement(arr,e1,e2){
    let temp = arr[e1];
    arr[e1]=arr[e2];
    arr[e2]=temp;
}

function bubble(arr){
    for(let i=arr.length-1;i>=1;--i){
        for(let j=0;j<i;++j){
            if(arr[j]>arr[j+1]){
                swapElement(arr,j+1,j);
            }
        }
    }
    console.log("arr",arr);
}

bubble([12,11,13,5,6])