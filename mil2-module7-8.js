// // const numbers=[12,98,77,6,23];
// // const numbers2=[2,3]    
// // const allNumbers=numbers.concat(numbers2)
// // console.log(allNumbers)
// // jora dite chaile,abar element er majkan e faka rakte('space')koma dite chaile(' ,')
// const numbs=[1,3,5,7]
// const joined=numbs.join('')
// console.log(joined)
// // position jante
// const position=numbs.indexOf(5)
// console.log('position of 5', position)
// // kono element array te na thakle tkn blbe -1 
// // array kina jante
// console.log(Array.isArray(numbs));
// .....,,,,all array element ekta ekta kore dekar jnno
// const numbers=[1,3,5,7,9];
// for(const number of numbers){
//     console.log('current number is ',number);
// // }
// const number=[1,3,5,7,9];
// // ,,,,,,,,reverse
// const numbers=[1,2,3,4,5,6,7];
// const reversed=numbers.reverse()
// console.log(numbers);
// // .........slice
// const numbers=[1,2,3,4,5,];
// // const slice=numbers.slice(2,6)
//  console.log(slice);
// // // .....,splice
// // console.log(numbers);
// // // const parts=numbers.splice(2, 2);
// // const fruits=["mango", 'jackfruits','guava', 'papaya', 'banana']
// // fruits.sort()
// // console.log(fruits)
// // ......shorthand operators...............
// let score=50;
// score +=10;
// console.log("After +=10:",score);
// score -=10;
// console.log("After -=10:",score);
// score *=10;
// console.log("After *=10:",score);
// score /=10;
// console.log("After /=10:",score);
// score **=10;
// console.log("After **=10:",score);
// score %=10;
// console.log("After %=10:",score);

// ====>>>icrement & decrement operators====
// let score=2;

// while(score <=20){
//     console.log(score);
//     score++;
// }
// let score=2;
// while(score <=20){
//     console.log(score);
//     score +=2;
// }
// let score=20;
// while(score >=2){
//     console.log(score);
//     score -=2;
// }


// ... ...mini Project .. .. ..
// let fullName="Rony Akter";
// let age=20;
// let country="Bangladesh";
// let learnLanguage="javascript";
// let dreamJob="Full-stack Developer";
// let isLearning=true;
// console.log("====================");
// console.log("     My Profile");
// console.log("====================");
// console.log();
// console.log("Name:", fullName);
// console.log("Age:", age);
// console.log("Country:", country);
// console.log("Favourite Language:", learnLanguage);
// console.log("Dream job:", dreamJob);
// console.log("Learning Javascript:", isLearning);
// console.log();
// console.log("====================")


// ... ...comparison operators.. .. .module8.. 
// price1=20;
// price2=10;
// console.log(price1==price2);
// console.log(price1===price2);
// console.log(price1 < price2);
// console.log(price1> price2);
// console.log(price1 <= price2);
// console.log(price1 >= price2);
// console.log(price1 != price2);
// console.log(price1!== price2);


// ... ... ==(value deke), ===(value+ type deke)...
// console.log("5" == 5);
// console.log("5" ===5);


// .. ... . .   ..condition true hole if e print hobe'''
// let isRaining=true;
// if(isRaining){
//     console.log("Take an Umbrella");
// }


// .... .use if condition . .. .. 
// let stock="0";
// if(stock ==="0"){
//     console.log("Out of stock");
// }
// . . . ..else er por kono condition likha hoi na krn if false hole else jai hok colbe
// let number=-5;
// if(number>0){
//     console.log("positve");
// }
// else{
//     console.log("negative")
// }


// .. .. . ..%4===0.. ,, ..
// let year=2020;
// if(year %4===0){
//     console.log("It is a leap year");
// }else{
//     console.log("not leap year");
// }


// ...gretter than . .. ..
// let speed=120;
// if(speed >80){
//     console.log("Overspedding")
// }else{
//     console.log("Normal spedding");
// }



// // '' . . .. use && . . .. 
// let age=19;
//  let hasTicket=true;
// if(age >18 && hasTicket){
//     console.log("Entry allowed");
// }


// // .. ...|| use .. .. 
// let isWeekend=true;
// let isHoliday=false;
// if(isWeekend || isHoliday){
//     console.log("No work today");
// }

// let userName="Rony Akter";
// let password=1234;
// if(userName === "Rony Akter" && password === 1234){
//     console.log("Login successful");
// }


// if/else if/else
// let marks = 70;
// if(marks >= 80){
//     console.log("A+");
// }
// else if(marks >= 70) {
//     console.log("A");
// }
// else if(marks >= 60) {
//     console.log("A-");
// }
// else if(marks >= 50) {
//     console.log("B")
// }
// else{
//     console.log("C")
// }
//    bmi (if-else-if)
// let bmi=15;
// if(bmi <= 18.5){
//     console.log("Underweight")
// }
// else if(bmi <= 25){
//     console.log("Normal")
// }
// else if(bmi <= 30 ){
//     console.log("Overweight")
// }
// else{
//     console.log("obese");
// }

let month=7;
if(month === 1 || month === 12 || month === 11){
    console.log("Winter");
}
else if(month === 2|| month === 3 || month === 4){
    console.log("Summer");
}
else if(month === 5 || month === 6 || month === 7){
    console.log("Moonsoon");
}
else if(month === 8 || month === 9 || month === 10){
    console.log("spring");
}
else{
    console.log(" No season")
}



.    nested if-else use ..  
let age = 20;
let hasID = true;
// if (age >= 18) {
//     if (hasID) {
//         console.log("Eligible to vote")
//     }
//     else {
//         console.log("not eligible")

//     }
// }
// else {
//     console.log("not eligible")
// }


      nested if-else  
let isLoggedIn=true;
    let isAdmin=false;
    if(isLoggedIn){
        if(isAdmin){
            console.log("Admin Dashboard")
        }
        else{
            console.log("User Deshboard")
        }
    }
    else{
        console.log("Please login")
    }


    //    ternary operator ==>
    //     let number=9;
    // console.log(number % 2===0 ? "Even" :"odd");

    // let number=15;
    // console.log(number >= 10 ? "Adult" : "Minor");
    
    // let number=900;
    // console.log(number > 1000 ? "Expensive" : "Afortable");


    //     //  Use ! not operator . ..
    // let hasPermission=false;
    // if(!hasPermission){
    //     console.log("Acess Denied");
    // }

    // let isOnline=false;
    // if(!isOnline){
    //     console.log("User is Offline")
    // }


    //    Build a simple discount system: if cart total is above 1000 AND 
    // the user is a member, apply a 20% discount; if only above 1000,
    //  apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

    // let cartTotal=1000;
// let isMember=true;
// if(cartTotal >= 1000 && isMember){
//     console.log("20% discount");
// }
// else if(cartTotal >= 1000){
//     console.log("10% discount");
// }else{
//     console.log("No discount")
// }

let i=1;
do{
    console.log(i);
    i++
}
while(i>10);

