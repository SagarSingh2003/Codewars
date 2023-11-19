//https://www.codewars.com/kata/reviews/558309189bfb9444fb000250/groups/6559e064093969000180a953

// Description 

// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]



function digitize(n) {
    //code here
    
    //convert the numebr into string
    let numberToString = n.toString();
    
    //declare a variable and assign to it an empty array
    let newArr = [];
    
    //
    let i = 0;
    
    //find out the length of the string and run a loop for that many times! 
    for(i = numberToString.length ; i > 0 ; i--){
        
        //extract each number from the index of i -1
        let pushingElement = numberToString[i - 1];
      
        //convert the string to a number and push the element to newArr
        newArr.push(Number(pushingElement));
    }
    
    return newArr;
  }