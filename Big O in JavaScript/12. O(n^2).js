//log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array){
    for(let i = 0; i < array.length; i++){ //O(n)
        for(let j = 0; j < array.length; j++){ //O(n)
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes); //O(n*n) => O(n^2)