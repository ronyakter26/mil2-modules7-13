// find the largest number in the array
        //   without function
let arr=[500,400,680,900]
// let largest=arr[0];
// for(let i=1;i<arr.length;i++){
//    let currentElement=arr[i];
//     if(currentElement>largest){
//         largest=currentElement;
//     }

// }
//     console.log("largest",largest)


                // with function

function largestNumber(arr){
    let largest=arr[0];
for(let i=1;i<arr.length;i++){
   let currentElement=arr[i];
    if(currentElement>largest){
        largest=currentElement;
    }


}
return largest;
}
console.log(largestNumber([500,900,600,800]))


