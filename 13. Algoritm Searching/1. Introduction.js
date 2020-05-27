// Types of searching
/*
    1. Linear Searching
    2. Binary searching
    3. BFS(Breath First Searching)
    4. DFS(Dept First Searching)
*/

//Binary Search

/*
    This is also known as sequential search.

    To traverse or search through a list or array using loop, is called linear search.
*/

let beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

//first way

beasts.indexOf('Godzilla');

//second way

beasts.findIndex((item) => {
    return item === 'Godzilla';
});

//third way

beasts.find((item) =>{
    return item === 'Godzilla';
})

//Fourth way

beasts.includes('Godzilla');


//Binary search

/*
    This is quite faster than linear search.

    Steps of binary searching:
        1. Sort the given array/list
        2. Divide and find the middle element of the given list/array
        3. Then check with the middle element as it is equal or greater or less than middle element.
        4. Again perform the step 2 until find the element.
*/


// There are two ways of graph and tree traversal
/*
    1. BFS(Breath First Search)
    2. DFS(Dept First Search)
*/