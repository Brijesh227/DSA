/**
 *  Process to solve recursive problem:
 * 
 *  1. What is the least amount of work i can do. - indentify repetitive small problem
 *  2. When would the process complete.
 * 
 * 
 * PROS:
 *  Reduce time complexity easily with memoization
 *  Reduce complex loops and auxiliary data structure
 *  Works with trees, JSON and graphs
 * 
 * CONS:
 *  Extra memory space and stack overflow
 *  
 * 
 */

function hello(cnt) {
    if(cnt === 10){
        return;
    }
    console.log("hello vc",cnt);
    hello(cnt + 1);
}
hello(5);