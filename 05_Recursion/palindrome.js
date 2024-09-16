const str = "12321";

function checkPalindrome(str,left,right) {
    if(str[left] !== str[right]){
        return false;
    }
    if(left === right){
        return true;
    }
    return checkPalindrome(str,left+1,right-1);
}

console.log(checkPalindrome(str,0,str.length-1) ? "yes" : "no");