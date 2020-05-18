// O(1) Notation or Constant Time Notation

/*  
    If the no of inputs are not any matter in a function, but all time the no of operations are same like 1/2/3 or any constant 
    number, then this is called O(1) Notation or time Constant.

*/

//Example: 

const name = ['amin', 'arafath', 'aulin'];

function findName(array){
    console.log(array[0]);
}

findName(name); // O(1) Notation -----> Constant Notation


//Explanation: 
/*
    This time inputs are 3, but operations is only the first element, So no of operations is all time constant, and for this is called O(1) Notation or constant notation 
*/