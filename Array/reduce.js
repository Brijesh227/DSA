const arr = [1,3,2];

const max = arr.reduce((prev,item)=> {
    if(item > prev){
        prev = item;
    }
});

console.log("max is",max);