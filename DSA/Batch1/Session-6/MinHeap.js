class MinHeap{
    constructor(){
        this.heap=[];
    }
    insert (value){
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp(){
        let index=this.heap.length-1;
        while(index>0){
            const parentIndex=Math.floor((index-1)/2);
            if(this.heap[index]<this.heap[parentIndex]){
                console.log("Before Swap: ",heap);
                [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]];
                index=parentIndex;
                console.log("After Swap: ",heap);
            }else{
                break;
            }
        }
    }
    extractMin(){
        if(this.heap.length===0){
            return null;
        }
        if(this.heap.length===1){
            return this.heap.pop();
        }
        const min=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown();
        return min;
    }
    heapifyDown(){
        let index=0;
        while(true){
            const leftChildIndex=2*index+1;
            const rightChildIndex=2*index+2;
            let smallestChildIndex=index;
            if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]<this.heap[smallestChildIndex]){
                smallestChildIndex=leftChildIndex;
            }
            if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]<this.heap[smallestChildIndex]){
                smallestChildIndex=rightChildIndex;
            }
            if(index!==smallestChildIndex){
                [this.heap.index,this.heap[smallestChildIndex]]=[this.heap[smallestChildIndex],this.heap[index]];
                index=smallestChildIndex;
            }else{
                break;
            }
        }
    }
}

const heap= new MinHeap();
heap.insert(6);
heap.insert(2);
heap.insert(3);
heap.insert(1);
console.log(heap.heap);
console.log(heap.extractMin());//