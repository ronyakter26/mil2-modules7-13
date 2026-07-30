//  some of a range of numbers 1-7
    //  without function
// let sum=0;
// for(let i=1; i<=7;i++){
//     sum=sum+i;
//     console.log('i=>>>',i)
// }
// console.log(sum)


            //  with fucktion
  function sumRange(number){
    let sum=0;
    for(let i=1; i<=number;i++){
    sum=sum+i;
    console.log('i=>>>',i)
}
return sum;
  }   
  console.log(sumRange(7)); 
    console.log(sumRange(8)); 
        console.log(sumRange(10)); 


