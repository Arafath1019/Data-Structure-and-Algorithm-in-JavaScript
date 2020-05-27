// Exercise Factorial:

/*
    Write two functions that finds the factorial of any number. One should use recursion, the other should just use a for loop.
*/

//Solution:01 (Using Recursion)

function findFactorialRecursive(number){
    if(number === 1 || number === 2){
        return number;
    }

    if(number === 0){
        return 1;
    }

    return number * findFactorialRecursive(number - 1);
}

//Solution:2 (using loop)

function findFactorialIterative(number){
    if(number === 1 || number === 2){
        return number;
    }

    if(number === 0){
        return 1;
    }

    let answer = 1;
    for(let i = 2; i <= number; i++){
        answer = answer * i;
    }

    return answer;
}