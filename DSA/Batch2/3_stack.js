class Stack {
    constructor() {
        this.data = []; //by default my stack is Empty
    }
    push(ele) {
        this.data.push(ele);
        console.log(`${ele} Inserted in your Stack`);
    }
    pop() {
        if (!this.isEmpty())
            console.log(`${this.data.pop()} is Removed From Stack`);
        else
            console.log(`Stack is Underflow`);
    }
    isEmpty() {
        return this.data.length == 0;
    }
}

const coinStack= new Stack();
coinStack.push(10);
coinStack.push(20);
coinStack.push(5);
coinStack.push(2);
coinStack.pop();
coinStack.pop();
coinStack.pop();
coinStack.pop();
coinStack.pop();