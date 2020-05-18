//O(n) Notation/ Linear Notation

/*
    Suppose i'm a class 8 student, and have a pen. In my class, we are 100 students without me. Then one day randomly
    i have given my pen to a friend all of them. But unluckily i have forgotten that who's took the pen from me. 

    So, now i have a lot of ways to find out my pen. Among of them, one way will be like this, i will go individually all of them and ask them about my pen. 
    So for this time my attempt will be like 100 times in worst case. 

    And this is called O(n) notation in time complexity concept. Isn't it clear? Ok, i'm describing.

    In our Big O Complexity chart, our graph is plotted according the no of operations in a function vs no of elements/inputs.

    Whenever, the no of operations in a function === no of elements/inputs, then the graph will be like "linear", and this is called O(n) notation. 
    This is also called "Linear Time".

    Now, for our above example, to find out my pen, i need to ask 100 of my friends, but if the no of my friends will increase, then no of my asking operations will also be increased.
    And this is increased  like linear way, and thats why it is called linear time or O(n) time complexity.


*/

//O(n) Example:

const name=['amin', 'notun', 'arafath'];

function findName(array){
    for(let i = 0; i < array.length; i++){
        if(array[i]==='arafath'){
            console.log('Name Found');
        }
    }
}

findName(name); // O(n) ----> Linear Time Complexity


//Explanation of the given example:
/*  
    In our example, as our input is 3, so our loop  will traverse for 3 times, but is our no of inputs will increase, then this no of operation will be increased.
    
    
    So, This type time complexity is O(n).
*/