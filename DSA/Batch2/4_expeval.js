class Stack{
    constructor() {
        this.data = []; //by default my stack is Empty
    }
    push(ele) {
        this.data.push(ele);
        console.log(`${ele} Inserted in your Stack`);
    }
    pop() {
        if (this.isEmpty())
            throw new Error('Stack Underflow')
        else
            return this.data.pop();
    }
    isEmpty() {
        return this.data.length == 0;
    }
    peek(){
        if (this.isEmpty())
            throw new Error('Stack is Empty')
        else
            return this.data[this.data.length-1]; //see the first element
    }
}

class PostFixEvaluator{
    constructor(){
        this.stack= new Stack();
    }
    performOperation(op,opr1,opr2){
        switch(op){
            case '+':return opr1+opr2;
            case '-':return opr1-opr2;
            case '*':return opr1*opr2;
            case '/':
                if(opr2==0) throw new Error('Divison By Zero');
                return opr1/opr2;
            default:
                throw new Error('Invalid Operator '+op);
        }
    }
    evaluate(expression){
        const tokens= expression.split(' ');
        for(let token of tokens){
            if(!isNaN(parseFloat(token))){
                this.stack.push(parseFloat(token))
            }else{
                const op2=this.stack.pop();
                const op1= this.stack.pop();
                const res= this.performOperation(token,op1,op2);
                this.stack.push(res);
            }
        }

        if(this.stack.data.length!==1){
            throw new Error('invalid expression');
        }

        return this.stack.pop();
    }
}

const obj= new PostFixEvaluator();
console.log(obj.evaluate("5 3 + 8 *"));