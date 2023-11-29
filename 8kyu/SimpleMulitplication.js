// https://www.codewars.com/kata/583710ccaa6717322c000105/solutions/javascript?filter=me&sort=best_practice&invalids=false

//Description:

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.



// Solution ======================================================



function simpleMultiplication(number) {
    // your code........
    
    //check if  even then multiply by 8 and return
    //else multiply by 9 and return
  
    return number % 2 === 0 ? number * 8 : number * 9;
}


// if even then multiply by 8 else mulitply by 9  , what if it's zero? then by 9 