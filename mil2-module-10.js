// . Create an array with 3 items of your choice. Log it.
// Expected: array with your 3 items printed
// 2. Log the length of the array from Task 1.
// Expected: 3
// 3. Log the item at index 0 and index 2 of the array.



const fruits=['Apple','Banana','Orange']
console.log(fruits.length);
console.log([fruits[0], fruits[2]]);
fruits[1]='Mango';
// console.log(fruits)    4. Change the item at index 1 to a new value. Log the array.
//  Add one item to the end of the array. Log the array.

fruits.push('Jackfruits');
console.log(fruits)
fruits.pop();
console.log(fruits)

// / Add one item to the start of the array. Log the array.
fruits.unshift('blue-berry')
console.log(fruits)

// Remove the first item from the array. Log the array and the removed value.
fruits.shift();
console.log(fruits)

//  Check whether the array contains a specific value. Log true or false.
console.log(fruits.includes('Orange'))

// Find the position of a specific value in the array. Log the number.
console.log(fruits.indexOf('Apple'));

// 11. Loop through the array with a for loop and log each item.
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

