// loop through an objects properties
let monitor={
    color:"Black",
    brand:"LG",
    display:"something",
    size:"something"
}


//  for in loop

for(let key in monitor){
    console.log(key,":",monitor[key]);
}


    // using keys method
    let objKeys=Object.keys(monitor);
    console.log(objKeys)



    //   for of loop
    for(let key of objKeys){
        console.log(key,":",monitor[key])
    }