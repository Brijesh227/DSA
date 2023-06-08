const str = "geeksforgeeks";
const obj = {};
let max = Number.MIN_VALUE;

function findMax(obj) {
    
    for(let index=0;index<str.length;++index){
        if(obj[str[index]]){
            obj[str[index]] += 1;
        } else {
            obj[str[index]] = 1;
        }
    }
    console.log("obj",obj);

    for(const value of Object.values(obj)){
        if(value > max) {
            max = value;
        }
    }
    console.log("max",max);
    for(const [key,value] of Object.entries(obj)){
        if(value === max){
            return `${key} is occured ${max} times in string `
        }
    }
}
console.log(findMax(obj));