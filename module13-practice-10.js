// find the smallest number in array

        //    without function
 let arr=[799,600,300,120,,1065]  
 let smallest=arr[0]  
 for(let i=1;i<arr.length;i++) {
    let currentElement=arr[i]
    if(currentElement<smallest)
        smallest=currentElement;
 } 
     console.log(smallest)
