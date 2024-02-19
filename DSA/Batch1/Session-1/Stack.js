class Stack{

    constructor(){
        this.data= []; //Empty Array
    }

    //Push element to Stack
    push(element){
        this.data.push(element);
        console.log("Data Added to Stack "+element);
    }
    //Remove element from stack
    pop(){
        if(this.isEmpty()){
            console.log("Underflow");
        }else{
            console.log(this.data.pop()+" Removed");
        }
    }
    isEmpty(){
        return this.data.length===0;
    }
    size(){
        return this.data.length;
    }
    //access first elemnt not remove
    peek(){
        console.log(this.data[this.size()-1]);
    }
    print(){
        console.log(this.data.join(', '));
    }
}

const stack= new Stack();
stack.push(1);
stack.push(2);
stack.push(5);
stack.push(10);
stack.push(20);
//See the Top Element
stack.peek();
//Remove first element
stack.pop();
//Available stack
stack.print();

