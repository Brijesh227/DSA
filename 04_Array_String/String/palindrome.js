let str = "abba";

function checkPalindrome(str) {
    for(let i = 0;i<Math.floor(str.length/2);++i){
        if(str[i] !== str[str.length-i-1]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome(str) ? "yes" : "no");
