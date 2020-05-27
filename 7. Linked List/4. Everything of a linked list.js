

class linkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
    }

    // Appending node at the last of the linked list

    append(value){
        const newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }


    // Adding a new node at the beginning of the linked list


    prepend(value){
        const newNode = {
            value: value,
            next: null
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    


    //Printing all the elements of the linked list

    printList(){

        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }


    //Inserting an element in the linked list

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        }

        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }


    //Removing a node in linked list

    remove(index){
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

}



