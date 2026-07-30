// filter numbers generate than a value

// let arr=[40,20,30,65,70,90]
// let value=30;
// let filterArray=[];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>value){
//         filterArray.push(arr[i])
//     }
// }
// console.log(filterArray)



        //    with fumction
function getValue(arr){
    let value=30;
let filterArray=[];
for(let i=1;i<arr.length;i++){
    if(arr[i]>value){
        filterArray.push(arr[i])
    }
}
return filterArray;
}
console.log(getValue([40,20,30,65,70,90]))