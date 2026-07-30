// sum and average of an array

        // without function
    // let array=[2,3,5,1] 
    //    let sum=0;
    //    for(let i=0;i<array.length;i++){
    //     console.log(array[i]);
    //     sum=sum+array[i]

    //    }
    //    console.log(sum)
    //    let avg=sum/array.length;
    //    console.log(avg)



                //   with function
function generateAvg(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i]

       }
       let avg=sum/array.length;
       return avg;
}
console.log(generateAvg([2,3,5,1]))