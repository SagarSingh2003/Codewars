// https://www.codewars.com/kata/reviews/551383009c58f722fc00033c/groups/6558c4efcd0e2d00015b3d7d

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples 

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


// ===============My solution=================

function countBy(x, n) {
    let z = [];
    //iterate the loop n times
    
    for (let i = 1; i <= n ; i++){
     
    //multiply each time the loop number with x 
      let product = x * i;
    //save the number in the array 
      z.push(product);
      
    }
  
    return z;
}