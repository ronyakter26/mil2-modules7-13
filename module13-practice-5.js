//  reverse and string
//  jodi nmbr hoi
 
// let arr=[1,2,3]
// console.log(arr.reverse())



                //    string er reverse
//  let str="Hero"
//   let reverseWord="";

//  for(i=str.length-1;i>=0;i--) {
//         let letter=str[i]

//     console.log("i=.",i,str[i])
//     reverseWord=reverseWord+letter;
//  }
//  console.log(reverseWord)


//         //    with function
  function reverseWord(str)  {
            let reverseWord="";

    for(i=str.length-1;i>=0;i--) {
        let letter=str[i]

    console.log("i=.",i, letter)
    reverseWord=reverseWord+letter;
 }
 return reverseWord;
  }  
  console.log(reverseWord("Hero"))
    

