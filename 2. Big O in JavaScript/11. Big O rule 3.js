//Big O rule 3:

/*  
    Big O rule 3 is "Different terms for inputs";

    That means, calculation of Big O notation for different different inputs are must be in different different variables, they will not same.
*/

//Example: 

function compressBoxesTwice(boxes1, boxes2){
    boxes1.forEach(box => {
        console.log(box); //O(n)
    });

    boxes2.forEach(box => {
        console.log(box); //O(m)
    });
}

compressBoxesTwice(boxes1, boxes2); //O(n+m)