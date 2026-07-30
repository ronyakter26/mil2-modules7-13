// return all even numbers,then their sum
let arr=[20,11,22,60,43,1,28,11]
let evenNumbers=[];
for(let i=1;i<arr.length;i++){
    if(arr[i]%2===0){
        console.log(arr[i])
        evenNumbers.push(arr[i])
    }
}
console.log(evenNumbers);
let sum=0;
for(let key of evenNumbers){
    console.log(key)
    sum=sum+key;
}
console.log(sum);
