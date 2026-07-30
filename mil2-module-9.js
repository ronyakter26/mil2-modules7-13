// // loop
// for (let i = 1; i <= 5; i++) {
//     console.log("Hello");
// }

// //    ..?while loop
// // let i=10;
// // while(i<=1){
// //     console.log()
// // }

// // for( let i=10; i<=100 ; i++){
// //     console.log('Hello')
// // }

// // print 1 to 10
// // for(let i=1; i<=10; i++){
// //     console.log(i)
// // }

// // while loop 10 down 1
// // let i=10
// // while(i>=1){
// //     console.log(i)
// //     i--
// // }

// // let i=1
// // while(i<=7){
// //     console.log("Hello")
// //     i++
// // }


// //  for loop prints even number 1 to 30
// // for(let i=2; i<=30; i +=2){
// //     console.log(i);
// // }

// sum = 0;
// for (let i = 1; i <= 20; i++) {
//     sum = sum + i
// }
// console.log(sum)

// multiplication table from 1 to 10 for loop
// let number=7;
// for(i=1; i<=10; i++){
//     console.log(number + 'x' + i + "=" +(number*i))
// }

// //    while loop
// let number=7;
// let i=1;
// while(i<=10){
//     console.log(number+ 'x' + i+'=' +(number*i))
//     i++
// }

//   do while
// let number=7;
// let i=1;
// do{
//     console.log(number+'x' +i + '=' +(number*i))
//     i++;
// }while(i<=10)

//   for loop sum of all even numbers (1-50)
// let sum=0;
// for(let i=2;i<=50;i +=2){
//     sum=sum+i
// }
//         console.log(sum)



//    break
// for (let i = 1; i <= 50; i++) {
//     if (i > 30) {
//         break;

//     }
//     console.log(i)

// }


    //  continoue
    // for(let i=1; i<=20;i++){
    //     if(i%4===0){
    //         continue;
    //     }
    //     console.log(i)
    // }

    // let i=1;
    // do{
    //     console.log(i);
    //     i++
    // }
    // while(i>10);


    // Write a for loop from 1 to 50 that stops completely (break)
    //  as soon as it reaches a number greater than 30.

    // for(let i=1;i<=50;i++){
    //     if(i>30){
    //         break;
    //     }
    //     console.log(i)
    // }


    // Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

    // for(let i=1;i<=20;i++){
    //     if(i%4===0){
    //         continue;
    //     }
    //     console.log(i)
    // }
        

    // Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10)
    //  and observe that the loop still runs once.

//     let i=1;
//     do{
// console.log(i);
// i++
//     }while(i>10);


// Write the same task —
//  printing numbers 1 to 5 — three times: once using for,
//  once using while, and once using do while. Compare how the code structure differs for each.

// for(let i=1;i<=5;i++){
//     console.log("for loop=>",i)
// }
// let i=1;
// while(i<=5){
//     console.log("while loop=>",i);
//         i++;

// }
// i=1
// do{
//     console.log("do while loop=>",i);
//     i++
// }while(i<=5);


// Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.

for(let i=1;i<=100;i++){
    
    if(i>40){
    break;
    }
    if(i%5===0){
        continue;
    }
    console.log(i)
}