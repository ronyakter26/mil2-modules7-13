// A-01
// let numbers=[45,12,89,3,67]
// let max=numbers[0];
// let min=numbers[0];
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>max){
//         max=numbers[i];
//     }
//     if(numbers[i]<min){
//         min=numbers[i]
//     }
// }
// console.log(max)
// console.log(min)



// A-03
// function weeklyStepsSummary(stepsArray){
//     if(Array.isArray(stepsArray) ===false){
//         return'Invalid'
//     }
//     let steps=0;
//     for(let item of stepsArray){
//         if(typeof item !== 'number'){
// return'Invalid'
//         }
//         steps=steps+item;
//     }
//     let goalReached=false;
//     if(steps>=50000){
//         goalReached=true;
//     }
//     const returnObj={
//         totalStep:steps,
//         goalReached,
//     }
//     return returnObj;
// }
// const arr=[8000,'Hello',9200,6000,10000,5500,4000];
// // const arr='Hello'
// const result=weeklyStepsSummary(arr);
// console.log(result)


// 07
// function generateReportCard(student){
//     if(typeof student !== 'object' ||Array.isArray(student)===true){
//         return 'Invalid'
//     }
//     if(typeof student.bangla !==="number"){
//         return'Invalid'
//     }
//     if(typeof student.english !==='number'){
//         return'Invalid'
//     }
//     if(typeof student.math !==='number'){
//         return'Invalid'
//     }
//     const total=student.bangla+student.english+student.math;
//     const avg=total/3;
//     let grade;
//     if(avg>=90){
// grade="A+"
    // }else if(avg>=80){
    //     grade="A"
    // }else if(avg>=70){
    //     grade="B"
    // }else{
    //     grade="F"
    // }
//    const returnObj={
//     name:student.name,
//     total:total,
//     average:avg,
//     grade,

//    } 
// return returnObj;

// }
// const studentObj={name:'Ayan',bangla:'78',english:85,math:92};
// // const studentObj=[1,3]
// // const studentObj='hello'
// const result=generateReportCard(studentObj);
// console.log(result);

// A-08

// function isLeapYear(year){
//   // divisible by 4 AND (not divisible by 100 OR divisible by 400)
//   //   if (year % 4 === 0) { // with if
//   //     if (year % 100 !== 0 || year % 400 === 0) {
//   //       return true;
//   //     }
//   //   }
//   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     // with operator
//     return true;
//   }

//   return false;
// }

// const y = 1900;
// const result = isLeapYear(y);
// console.log(result);


// A-09
function analyzeEmailDomains(text) {
  if (typeof text !== 'string') {
    return 'Invalid';
  }
  const words = text.split(' ');

  let emailCount = 0;
  let longestDomain = '';
  for (let word of words) {
    if (word.includes('@')) {
      emailCount++;
      const parts = word.split('@');
      const domain = parts[1];
      if (domain.length > longestDomain.length) {
        longestDomain = domain;
      }
    }
  }
  const returnObj = { emailCount: emailCount, longestDomain: longestDomain };
  return returnObj;
}

// const t = 'Contact support@gmail.com hello admin@yahoo.com info@programminghero.com';
const t = 'Invalid';

const result = analyzeEmailDomains(t);
console.log(result);

// "support@gmail.com" -> ["support","gmail.com"]
// "info@programminghero.com" -> ["info", "programminghero.com"]

console.log(typeof [1, 2], 'type of');
