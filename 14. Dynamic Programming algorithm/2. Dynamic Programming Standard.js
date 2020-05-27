// Using Dynamic Programming Standard

function memorizedAddTo80(n){
    let cache = {};
    return function(n){
        if(n in cache){
            return cache[n];
        }else{
            let answer = 80 + n;
            cache[n] = answer;
            return answer;
        }
    };
}