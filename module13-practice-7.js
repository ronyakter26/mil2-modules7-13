//  check if a string is a polindrome
        //    without function
// let str='dad';
// let reverseStr='';
// for(let i=str.length-1; i>=0;i--){
//     let letter=str[i]
//     reverseStr=reverseStr+letter;

// }
// console.log(reverseStr)
// if(str === reverseStr){
//     console.log('palindrome')
// }
// else{
//     console.log("Not palindrome")
// }



                    //  with function
                    function isPalindrome(str){
                        let reverseStr='';
for(let i=str.length-1; i>=0;i--){
    let letter=str[i]
    reverseStr=reverseStr+letter;

}
console.log(reverseStr)
if(str === reverseStr){
    return true;

}
else{
return false;
}
                    }
console.log(isPalindrome("dad"))