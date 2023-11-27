// https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript?filter=me&sort=best_practice&invalids=false

// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


// ===========================================================================

//Solution:

function sumArray(array) {
    
    let result = 0 ;
    console.log(array);
     if ( array != null ? (array.length > 1 ? true : false ) :  false)   {
        
  
      let lowestNum = array[0];
      let highestNum = array[0];
  
        array.forEach( element => {
            highestNum = element >= highestNum ? element : highestNum;
            lowestNum = element <= lowestNum ? element : lowestNum;
        })
       
        const numberOfLowest = array.filter(element => {
            return element === lowestNum;
        })
        
        const numberOfHighest = array.filter( element => {
          return element === highestNum;
        })
              
        array.forEach( element => {
          
          if ( element !== highestNum && element !== lowestNum) {
            //add that element to the result binding
            
            result += element; 
              
          }
          
        })
       
      if (numberOfLowest.length > 1){
        result += numberOfLowest[0] * (numberOfLowest.length - 1);
      }
       
      if (numberOfHighest.length > 1){
        result += numberOfHighest[0] * (numberOfHighest.length - 1);
      }
  
       
     } else {
       
       return 0;
       
     }
    
    return result;
    
  }