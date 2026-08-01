// . Create an array with 3 items of your choice. Log it.
// Expected: array with your 3 items printed
// 2. Log the length of the array from Task 1.
// Expected: 3
// 3. Log the item at index 0 and index 2 of the array.



// const fruits=['Apple','Banana','Orange']
// console.log(fruits.length);
// console.log([fruits[0], fruits[2]]);
// fruits[1]='Mango';
// console.log(fruits)    4. Change the item at index 1 to a new value. Log the array.
//  Add one item to the end of the array. Log the array.

// fruits.push('Jackfruits');
// // console.log(fruits)
// // fruits.pop();
// // console.log(fruits)

// // / Add one item to the start of the array. Log the array.
// fruits.unshift('blue-berry')
// console.log(fruits)

// // Remove the first item from the array. Log the array and the removed value.
// fruits.shift();
// console.log(fruits)

// //  Check whether the array contains a specific value. Log true or false.
// console.log(fruits.includes('Orange'))

// // Find the position of a specific value in the array. Log the number.
// console.log(fruits.indexOf('Apple'));

// // 11. Loop through the array with a for loop and log each item.
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// // Combine two arrays into one new array. Log the result.
// const array1=['sumaiya','riya','koli','baby','doli']
// const array2=['saly','nahida']
// const con=array1.concat(array2)
// console.log(con);

// . Take a portion of an array (not the whole thing) without changing the original. Log the result.
// let portion=array1.slice(1,4)
// console.log(portion)

//  Turn an array of words into a single sentence string.
// let array=['i','Love','My','Mother','Very','Much']
// let sentence=array.join(" ")
// console.log(sentence)

//  Check two variables (one array, one not) and log whether each is an array.
// let array1=[2,3,5,7]
// let array2="hello"
// console.log(Array.isArray(array1))
// console.log(Array.isArray(array2))

// 5. Reverse an array of at least 5 items. Log the result.
// array1.reverse();
// console.log(array1)

// 6. Sort an array of names alphabetically. Log the result.
// array1.sort();
// console.log(array1)


// 8. Given an array of numbers, log only the values greater than 10, using a loop.
// let array=[5,9,11,10,80,40,20]
// for(let i=0;i<array.length;i++){
//     if(array[i]>10){
//         console.log(array[i])
//     }
// }

// 9. Given an array of numbers, calculate and log the total sum, using a loop.
// let sum=0
// for(let i=0;i<array.length;i++){yrrrf rr2345rfdsarefc d3
    // sum=sum+array[i];
// }
// console.log(sum);


// 1. Given an array of numbers, remove duplicates and log the unique values only.
// let array=[3,5,5,6,9,7,6,];
// let unique=[];
// for(let i=0;i<array.length;i++){
//     if(!unique.includes(array[i])){
//         unique.push(array[i])
//     }
// }
// console.log(unique);


// 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.
// let array=['rony','mim',6,1,3,'koli',90]
// let strings=[]
// let numbers=[]
// for(const arr of array){
//     if(typeof arr === "number"){
//         numbers.push(arr)
//     }
//     else if(typeof arr === "string"){
//         strings.push(arr)
//     }
// }
// console.log(strings);
// console.log(numbers);


// . Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).
// let numbers=[40,2,30,34,12,33,1]
// let largest=numbers[0];
// let smallest=numbers[0]
// for(const number of numbers){
//     if(number>largest){
//         largest=number
//     }else if(number<smallest){
//         smallest=number
//     }
// }
// console.log(largest);
// console.log(smallest);



//  Flatten a nested array (array containing arrays) into a single flat array.
// Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]
// let array=[1,[2,3],[4,[5,6]]]
// let flatten=array.flat(Infinity)
// console.log(flatten)



// Rotate an array left by one position (first item moves to the end). Log the result.
// Expected: [2,3,4,5,1] from [1,2,3,4,5]
let array=[2,4,6,7,8,]
let end=array.shift()
array.push(end)
console.log(array)