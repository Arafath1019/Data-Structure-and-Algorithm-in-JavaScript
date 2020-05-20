//Reverse a string

const str = 'Hi my name is Arafath';

function reverse(str){
    //check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Please enter a string to reverse!!';
    }

    const backwards = [];
    const totalItems = str.length -1;
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }

    const reverseString = backwards.join('');

    return reverseString;
}

reverse(str);