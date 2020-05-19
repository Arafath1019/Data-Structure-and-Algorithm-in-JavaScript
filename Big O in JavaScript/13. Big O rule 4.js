//Big O rule 4:

/*
    Big O rule 4 is "Drop non-Dominants"

    That means after big O calculation, there will be some parts, which of them will be less dominants, and some will be more dominants, but among of them, only take the most dominants parts and drop the non-dominants parts.
*/

//Example: 

const numbersArray = [1,2,3,4,5];

function printAllNumbersThenAllPairSums(numbers){
    console.log('These are the numbers: '); //O(1)
    numbers.forEach( number =>{
        console.log(number); //O(n)
    });

    console.log('And these are their sums: '); //O(1)
    numbers.forEach( firstNumber =>{ //O(n)
        numbers.forEach( secondNumber => { //O(n)
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairSums(numbersArray); //O(2 + n + n^2) => O(n^2)