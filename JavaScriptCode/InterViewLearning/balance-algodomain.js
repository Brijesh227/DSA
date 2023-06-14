/*
Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.
*/

function canBalance(arr) {
    for(let i=0;i<arr.length;++i){
        let leftsum = 0;
        
        let rightsum =0 ;
        for(let j=i+1;j<arr.length;++j){
            rightsum+=j;
        }
        if(arr[i] < sum){
            ++i
        }
    }
}
console.log(canBalance([1, 1, 1, 2, 1]));  
// true
console.log(canBalance([2, 1, 1, 2, 1]));     
// false
console.log(canBalance([10,10]));           
true
console.log(canBalance([1,2,3,4,10]));
true