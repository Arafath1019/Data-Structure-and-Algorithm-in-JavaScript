// Creating a linked list class:

class linkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
    }
}

const myLinkedList = new linkedList(10);
