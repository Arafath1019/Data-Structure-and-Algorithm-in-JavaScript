//Merge Sorted Arrays

const array1 = [0, 3, 4, 31];
const array2 = [3, 4, 6, 30];

function mergeSortedArrays(array1, array2){
    const mergedArrays = [];

    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //check input
    if(array1.length === 0){
        return array2;
    }
    if(array2.length === 0){
        return array2;
    }

    while(array1Item || array2Item){
        if(array2Item === undefined || array1Item < array2Item){
            mergedArrays.push(array1Item);
            array1Item = array1[i];
            i++;
        }else{
            mergedArrays.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return  mergedArrays;
}

mergeSortedArrays(array1, array2);