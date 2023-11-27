// https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript?filter=me&sort=best_practice&invalids=false

// Description :

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.





//Solution

function positiveSum(arr) {
  
    let result = 0;  
  
    const positiveNum = arr.filter( (element) => {
          return element > 0 ;
    }).forEach( newElement => {
          result += Number(newElement);
          console.log(result);
          
    });
    
    
    return result;
    
}