// FizzBuzz(1-n)
// loop through numbers from 1 to n,if a number is divisible
// by 3,print "Fizz" if divisible by 5,print "Buzz";if divisible by both 
// ,print the number itself.

        //    without function

let number=15;
for(let i=1;i<=number;i++){
    console.log("i =>", i)
    if(i%3===0 && i%5===0){
        console.log("Fizzuzz")
    }
    else if(i%5===0){
        console.log("Buzz")
    }
    else if(i%3===0){
        console.log("Fizz")
    }
    else{
        console.log(i)
    }
}

                //   with function
 function fizzBuzz(number){
    for(let i=1;i<=number;i++){
    console.log("i =>", i)
    if(i%3===0 && i%5===0){
        console.log("Fizzuzz")
    }
    else if(i%5===0){
        console.log("Buzz")
    }
    else if(i%3===0){
        console.log("Fizz")
    }
    else{
        console.log(i)

    }
}
 }
 fizzBuzz(15);
 