// https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript?filter=me&sort=best_practice&invalids=false


// DESCRIPTION : 

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined





function countSheeps(sheep) {
    // TODO
    
    //using filter method filter out the true values into a new array
    //calculate length of the array
    
    const sheepAttendence = sheep.filter( ispresent => {
        
        ispresent = ispresent == undefined ? 0 : ispresent;
        return ispresent === true;
    });
    
    return sheepAttendence.length;
  }
  
  
  //EDGE CASES :
  //true marks present , false marks absent , can there be no value? if there is - then consider it as absent