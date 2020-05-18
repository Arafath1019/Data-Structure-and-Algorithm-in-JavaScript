//What is Good Code?

/*
    Before knowing about the good code, we must have to learn about what is code?
    And the answer of this question is, in a general sense, code is a language that computer can understand. As we all know that computer can't understand natural language,
    so we need some especial things to understand the computer that what are we going to do. In this case, code is a set of instructions that performs task/tasks which is written in some special words is called code. And this special words are called programming language constructs.
    
    
    Now, we all know that what is code. Now we can jump into our topic. And our topic is what is good code. 

    Good code can be described in two things:
        1. Readable 
        2. Scalable
    
    
    Good code must have the following properties:
        1. Maintainability: If it can be understood, maintained and extended by any other developer, then this code can obviously called good code.
        2. Efficiency
        3. Elegance: simple, proper use of language constructs and environment compatibilities.
        4. Modularity 
        5. Proper Object Oriented Design.
        6. Simplicity
        7. Layering
        8. Design
        9. Commenting
        etc.
*/




//Good Code Example: 


const name = ['arafath'];

function findName(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'arafath'){
            console.log('Name found!!!');
        }
    }
}

findName(name);


