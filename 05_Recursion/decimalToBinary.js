function decimalToBinary(number) {
    if(number === 0){
        return;
    }
    const rem = number % 2;
    decimalToBinary(Math.floor(number / 2));
    console.log(rem);
}

decimalToBinary(233);