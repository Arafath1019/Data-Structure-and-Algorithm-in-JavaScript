// Big O Notation Rule 2:

/*
    Rule 2 is "Remove constants"

    It is simply after calculating Big O notation, just remove the constant part  from your calculation and remain the exact value from the calculation.

*/

//Example 01:

function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items[0]); //O(1)

    let middleIndex = Math.floor(items.length / 2); //O(1)
    let index = 0; //O(1)

    while(index < middleIndex){//O(n/2)
        console.log(items[index]); //O(n/2)
        index++; //O(n/2)
    }

    for(let i = 0; i < 100; i++){
        console.log('hi'); //O(100)
    }

}

printFirstItemThenFirstHalfThenSayHi100Times(items); //O(3+n/2+n/2+n/2+100) => O(103+3n/2) => O(n); after removing the constants part



//Example 02:

function compressBoxesTwice(boxes){
    boxes.forEach(box => { 
        console.log(box); //O(n)
    });

    boxes.forEach(box => {
        console.log(box); //O(n)
    });
}

compressBoxesTwice(boxes); //O(n+n) => O(2n) => O(n); after removing constants part