// Implementation of an array

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    //retrive any element
    get(index){
        return this.data[index];
    }

    //adding an element at the last 
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    //removing the last element
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    //Delete any item at given index
    deleteAtIndex(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    //shifting items one position before
    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();

myArray.push('Hi');
myArray.push('You');
myArray.push("!");
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
console.log(myArray);