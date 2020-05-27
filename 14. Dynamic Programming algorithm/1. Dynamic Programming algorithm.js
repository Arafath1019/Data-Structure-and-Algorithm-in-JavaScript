// Dynamic programming

/*
    Dynamic programming is mainly an optimization over plain recursion.
    Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming.
    The idea is to simply store the results of sub-problems, so that we don't have to re-compute them when needed later.
    This simple optimization reduces time complexities from exponential to polynomial.
    
    Dynamic programming is an optimization technique using something called cache.
*/

//Memorization

/*
    Memorization is simply for caching.

    Caching is a way to store values so we can use them later on.
    Caching is just a way for us to speed up programs and holds some piece of data in an easily accessible and memorization is a specific form of caching.
*/

//For example

let cache = {};

function memorizedAddTo80(n){
    if(n in cache){
        return cache[n];
    }else{
        cache[n] = n + 80;
        return cache[n];
    }
}
