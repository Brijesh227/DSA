function swapElement(arr,e1,e2){
    let temp = arr[e1];
    arr[e1]=arr[e2];
    arr[e2]=temp;
}

function selectionSort(arr){
    for(let i=0;i<arr.length-1;++i){
        let min = arr[i];
        let index = 0;
        for(let j=i+1;j<arr.length;++j){
            if(arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }
        if(arr[i] > min){
            swapElement(arr,i,index)
        }
    }
    console.log("sorted arr",arr);
}


selectionSort([12,11,13,5,6]) // O(N^2)