let str = "";
function print1(n) {                    // * * *
    for(let row=0;row<n;++row){         // * * *
        for(let col=0;col<n;++col){     // * * *
            str+="* ";
        }
        str+="\n"
    }
    return str;
}

function print2(n) {                    // * 
    for(let row=0;row<n;++row){         // * *
        for(let col=0;col<=row;++col){  // * * *
            str+="* ";
        }
        str+="\n"
    }
    return str;
}

function print3(n) {                    // 1 
    for(let row=0;row<n;++row){         // 2 2
        for(let col=0;col<=row;++col){  // 3 3 3
            str+=row+1+" ";
        }
        str+="\n"
    }
    return str;
}

function print4(n) {                        // * * *
    for(let row=0;row<n;++row){             // * *
        for(let col=0;col<n-row;++col){     // *
            str+="* ";
        }
        str+="\n"
    }
    return str;
}

function print5(n) {                        // 1 2 3
    for(let row=0;row<n;++row){             // 1 2 
        for(let col=0;col<n-row;++col){     // 1
            str+=col+1+" ";
        }
        str+="\n"
    }
    return str;
}

function print6(n) {                    //  * 
    for(let row=0;row<n;++row){         // **  
        for(let col=0;col<n;++col){     //***
            if(n-1-row <= col){
                str+="*";
            }else{
                str+=" "
            }
            
        }
        str+="\n"
    }
    return str;
}

function print7(n) {                        //  *  
    for(let row=0;row<n;++row){             // ***  
        for(let col=0;col<n-1-row;++col){   //*****
            str+=" ";
        } 
        for(let col=0;col<2*row+1;++col){
            str+="*";
        }
        // for(let col=0;col<n-1-row;++col){
        //     str+=" ";
        // }
        str+="\n"
    }
    return str;
}

function print8(n) {                        //*****
    for(let row=0;row<n;++row){             // ***  
        for(let col=0;col<row;++col){       //  *  
            str+=" ";
        } 
        for(let col=0;col<2*(n-row)-1;++col){
            str+="*";
        }
        // for(let col=0;col<row;++col){
        //     str+=" ";
        // }
        str+="\n"
    }
    return str;
}

function print9(n) {                        
    for(let row=0;row<n;++row){                     //  *  
        for(let col=0;col<(n-row)-1;++col){         // ***  
            str+=" ";                               //*****
        }                                           //*****
        for(let col=0;col<2*(row)+1;++col){         // ***  
            str+="*";                               //  *  
        }
        str+="\n"
    }
    for(let row=0;row<n;++row){                 
        for(let col=0;col<row;++col){        
            str+=" ";                              
        }                                          
        for(let col=0;col<2*(n-row)-1;++col){        
            str+="*";                              
        }
        str+="\n"
    }
    return str;
}

function printFun9(n) {
    // const str1 = print7(n);
    // return print8(n);

    print7(n);
    return print8(n);
}

function print10(n) {                           // *
    //for(let row=0;row<n;++row){               // **
    //    for(let col=0;col<=row;++col){        // ***
    //        str+="*";                         // ****
    //    }                                     // *****
    //    str+="\n";                            // ****
    //}                                         // ***
    //for(let row=0;row<n-1;++row){             // **
    //    for(let col=0;col<n-row-1;++col){     // *                
    //        str+="*";
    //    }
    //    str+="\n";
    //}

    // or

    for(let row=0;row<=2*n-1;++row){
        let star = row;
        if(row > n) {
            star = (2*n) - row;
        }
        for(let col=0;col<star;++col){
            str+="*";
        }
        str+="\n";
    }
    return str;
}

function print11(n){                            // 1
    for(let row=0;row<n;++row){                 // 01
        let flag = row%2 === 0 ? true : false;  // 101
        for(let col=0;col<=row;++col){          // 0101
            str+=Number(flag);                  // 10101
            flag = !flag;
        }
        str+="\n";
    }
    return str;
}

function print12(n){                                    // 1      1
    // for(let row=0;row<n;++row){                      // 12    21
    //     for(let col=0;col<=row;++col){               // 123  321
    //         str+=col+1                               // 12344321                  
    //     }
    //     for(let col=0;col<2*n-2*(row+1);++col){
    //         str+=" "
    //     }
    //     for(col=row;col>=0;--col){
    //         str+=col+1
    //     }
    //     str+="\n";
    // }
    // return str;

    let space = 2*(n-1);
    for(let row=1;row<=n;++row){
        for(let col=1;col<=row;++col) {
            str+=col;
        }
        for(let col=0;col<space;++col){
            str+=" ";
        }
        for(let col=row;col>=1;--col) {
            str+=col
        }
        space-=2;
        str+="\n";
    }
    return str;
}

function print13(n){                    //1
    let num = 1;                        //23
    for(let row=0;row<n;++row){         //456
        for(let col=0;col<=row;++col){  //78910
            str+=num;                   //1112131415
            num+=1;
        }
        str+="\n"
    }
    return str;
}

function print14(n){                                // A
    let charCode = 'A'.charCodeAt(0);               // A B
    for(let row=0;row<n;++row){                     // A B C
        for(let col=0;col<=row;++col) {
            str+= String.fromCharCode(charCode+col);
        }
        str+="\n";
    }
    return str;
}

function print15(n){                        // 4 3 2 1
    for(let row=0;row<n;++row){             //   3 2 1
        for(let i=0;i<row;++i){             //     2 1
            str+=" ";
        }
        for(let col=n+1-row;col>0;--col) {
            str+=col;
        }
        str+="\n";
    }
    return str;
}

function print16(n){                                // A B C
    let charCode = 'A'.charCodeAt(0);               // A B
    for(let row=0;row<n;++row){                     // A
        for(let col=n;col>row;--col) {
            str+= String.fromCharCode(charCode+(n-col));
        }
        str+="\n";
    }
    return str;
}

function print17(n){                                // A
    let charCode = 'A'.charCodeAt(0);               // B B
    for(let row=0;row<n;++row){                     // C C C
        for(let col=0;col<=row;++col) {
            str+= String.fromCharCode(charCode);
        }
        ++charCode;
        str+="\n";
    }
    return str;
}

function print18(n){                                   //    A
    // let charCode = 'A'.charCodeAt(0);               //  A B A
    // for(let row=0;row<n;++row){                     //A B C B A
    //     for(let space=0;space<n-row-1;++space){
    //         str+=" ";
    //     }
    //     for(let i=0;i<=row;++i){
    //         str+=String.fromCharCode(charCode+i);
    //     }
    //     for(let j=0;j<row;++j){
    //         str+=String.fromCharCode(charCode+row-j-1);
    //     }
    //     str+="\n";
    // }

    for(let row=0;row<n;++row){
        let charCode = 'A'.charCodeAt(0);
        for(let space = 0;space < n-row-1;++space){
            str+=" ";
        }
        let cnt = 0;
        for(let col=1;col<=2*row+1;++col){
            if(col<=(2*row+1)/2){
                str+=String.fromCharCode(charCode+cnt);
                ++cnt;
            } else {
                str+=String.fromCharCode(charCode+cnt);
                --cnt;
            }
        }
        str+="\n";
    }
    return str;
}

function print19(n){                                // C
    let charCode = 'E'.charCodeAt(0);               // B C
    for(let row=0;row<n;++row){                     // A B C
        for(let col=0;col<=row;++col) {
            str+= String.fromCharCode(charCode+col);
        }
        --charCode;
        str+="\n";
    }
    return str;
}

function print20(n){                                // **********
    for(let row=0;row<n;++row){                     // ****  ****
        if(row<n/2){                                // ***    ***
            star = n/2-row;                         // **      **
            for(let col=0;col<star;++col) {         // *        *
                str+="*";                           // *        *
            }                                       // **      **
            for(let space=0;space<2*row;++space){   // ***    ***
                str+=" ";                           // ****  ****
            }                                       // **********
            for(let col=0;col<star;++col){
                str+="*";
            }
        } else {
            star = row-(n/2)+1;
            for(let col=0;col<star;++col){
                str+="*";
            }
            for(let space =0;space<n-2*star;++space){
                str+=" ";
            }
            for(let col=0;col<star;++col){
                str+="*";
            }
        }
        str+="\n";
    }
    return str;
}

function print21(n) {                   // *        *
    for(let row=1;row<=n;++row){        // **      **
        let space = 2*(n-row);          // ***    ***
        for(let col=0;col<row;++col){   // ****  ****        
            str+="*";                   // **********
        }                               // ****  ****
        for(let col=0;col<space;++col){ // ***    ***
            str+= " ";                  // **      **
        }                               // *        *      
        for(let col=0;col<row;++col){
            str+="*";
        }
        str+="\n";
    }             
    for(let row=n-1;row>0;--row){         
        let space = 2*(n-row);
        for(let col=0;col<row;++col){                
            str+="*";
        }
        for(let col=0;col<space;++col){
            str+= " ";
        }
        for(let col=0;col<row;++col){
            str+="*";
        }
        str+="\n";
    }
    return str;
}

function print22(n){                                //*****
    // for(let row=1;row<=n;++row){                 //*   *
    //     if(row === 1 || row === n){              //*   *
    //         for(let col=0;col<n;++col){          //*   *
    //             str+="*";                        //*****
    //         }                                    
    //     }else {
    //         str+="*";
    //         for(let space=0;space<n-2;++space){
    //             str+=" ";
    //         }
    //         str+="*";
    //     }
    //     str+="\n";
    // }

    //OR

    for(let row=0;row<n;++row){
        for(let col = 0;col<n;++col){
            if(row === 0 || row === n-1 || col === 0 || col === n-1){
                str+="*";
            } else {
                str+=" ";
            }
        }
        str+="\n";
    }
    return str;
}

function print23(n) {                       // 4444444
    let iteration = 2*n-1;                  // 4333334
    for(let row=0;row<iteration;++row){     // 4322234
        for(let col=0;col<iteration;++col){ // 4321234
            let top = row;                  // 4322234
            let bottom = iteration-1-row;   // 4333334
            let left = col;                 // 4444444
            let right = iteration-1-col;    
            str+=n-Math.min(Math.min(top,bottom),Math.min(left,right))
        }
        str+="\n"
    }
    return str;
}

console.log(print23(4));