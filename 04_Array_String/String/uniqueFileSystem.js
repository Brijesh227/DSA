const arr = ["home" , "myfirst" ,"downloads", "myfirst", "myfirst"];
const map = new Map();
const outarr = [];
for(let i=0;i<arr.length;++i){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1);
        outarr.push(`${arr[i]}${map.get(arr[i])-1}`);
    }else {
        map.set(arr[i],1);
        outarr.push(arr[i]);
    }
}
console.log(outarr); 