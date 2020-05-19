//Big O rule 1:

/*
    Rule no 1 is "Worst case":

    That means always considering the worst scenario of the case.

*/

//For example:

const everyone = ['andre', 'nigoe', 'jossef', 'nemo', 'new'];

function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if(array[i]==='nemo'){
            console.log('Found Nemo');
            break;
        }
    }
}

findNemo(everyone);

//Explanation: 
/*
    We have used break statement in our if statement, because otherwise our for loop will execute till array length. 
    so using break statement, our program is a little bit efficient than before, and whenever it gets nemo it will break the execution.

    Now, thinking about the worst case, if our nemo is in the first position of our array, then our loop will execute for one time, if it will in 3rd position, then our loop will execute for 3 times, but if nemo is in the last position of our array, then our loop will execute till array length, and our program execution can't get more than the array length, so this time our worst case is array length, and whenever calculation the Big O notation for this program, we will consider the worst  case every time.

    And this is our first rule of calculating Big O notation.
*/