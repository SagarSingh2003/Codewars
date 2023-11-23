// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/solutions/javascript?filter=me&sort=best_practice&invalids=false


// Description:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'




// Solution

function solution(str){
  
    // calculate the length of the string
    //run a for loop from last index of the string to 0 
    // concatenate the strings
    
    let newString = "";
    
    for ( let i = str.length - 1 ; i >= 0 ; i-- ){
      newString += str[i];     
    }
    
    return newString ;
  }