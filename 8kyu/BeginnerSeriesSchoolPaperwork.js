// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/solutions/javascript?filter=me&sort=best_practice&invalids=false

// Description

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:

// n= 5, m=5: 25
// n=-5, m=5:  0




function paperwork(n, m) {
    return (m > 0 && n > 0 ) ? m * n : 0; 
}


//OR

function paperwork(n, m){
  
    //check is m or n is less than 0 , if it is then return 0 or return m * n 
    if( m < 0 || n < 0){
    
      return 0;
    
    }else{
      
      return n * m 
      
    }
}