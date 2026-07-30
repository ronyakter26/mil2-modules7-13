//  count vowels in string

            //  without function
//             let vowel='aeiou'
            let count=0;
//  let str='programming hero'    
//  for(let i=0;i<=str.length-1;i++) {
//     let letter=str[i]
//     console.log(i, letter);
//     if(vowel.includes(letter)){
//         console.log('vowel')
//         count++;
//     }

//  }    
//  console.log("count value of vowel",count)  

          
            // with function
function countVowel(str)  {
        let vowel='aeiou'
                 let count=0;


 for(let i=0;i<=str.length-1;i++) {

    let letter=str[i]
    console.log(i, letter);
    if(vowel.includes(letter)){
        console.log('vowel')
        count++;
    }

 }    
 return count;
}  
console.log(countVowel('programming hero'))        