//Exercise Fibonacci:

/*
    Given a number N return the index value of the fibonacci sequence, where the sequence is 
        0,1,1,2,3,5,8,13,21,34,55....
    
    The pattern of the sequence is that each value is the sum of the 2 previous values, that means, that for N=5 --> 2+3;
*/

function fibonacci(number){
    if(number < 2){
        return number;
    }

    return fibonacci(n-1)+fibonacci(n-2);
}