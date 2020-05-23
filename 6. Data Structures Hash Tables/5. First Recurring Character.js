// Google Interview Question
// Find out the first recurring character:

/*
    create a function which will find out the first recurring character.

    sample input: [2,5,1,2,3,5,1,2,4]
    output: 2

    sample input: [2,4]
    output: undefined

*/



//First Method / O(n^2)


function firstRecurringCharacter1(input){
    for(let i = 0; i < input.length; i++){
        for(let j = i + 1; j < input.length; j++){
            if(input[i] === input[j]){
                return input[i];
            }
        }
    }

    return undefined;
}

firstRecurringCharacter1([2,5,1,2,3,5,1,2,4]);



// Second Method / O(n) / Efficient way

function firstRecurringCharacter2(input){
    let map = {};
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i];
        }else{
            map[input[i]] = i;
        }
    }

    return undefined;
}

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);
