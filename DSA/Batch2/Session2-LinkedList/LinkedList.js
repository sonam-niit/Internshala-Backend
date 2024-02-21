class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;//bydefault when you create LinkedList the head is empty as there is no data in LinkedList
    }

    insert(mydata){
        //create New Node Based on this data
        const newNode= new Node(mydata);//create the Object of Node for data which you want to insert
        if(this.head==null){
            this.head=newNode;
        }else{
            let curr=this.head;
            while(curr.next!=null){
                curr= curr.next;
            }
            curr.next=newNode;
            //Iterated from Head to its last node when it reaches to its last I have added newnode after the last node
        }
    }
    insertData(data,nodedata){
        const newNode=new Node(data);
        if(!nodedata){
            this.insert(data);
        }
        let curr= this.head;
        while(curr.data!==nodedata){
            curr=curr.next;
        }
        newNode.next=curr.next;
        curr.next= newNode;
    }
    //Insert node Inbetween
    insertNodeAfter(data){
        const newNode= new Node(data);
        if(!this.head || data<this.head.data){
            newNode.next=this.head;
            this.head= newNode;
            return;
        }
        let curr= this.head;
        while(curr.next && data>curr.next.data){
            curr=curr.next;
        }
        newNode.next=curr.next;
        curr.next=newNode;
    }
    //delete logic
    deleteNode(data){
        if(!this.head){
            console.log(`Linked List is Empty No data to delete`);
            return;
        }
        if(this.head.data==data){
            this.head=this.head.next; //head shifted to its next
            console.log(`${data} deleted`);
            return;
        }
        let curr= this.head;
        let prev=null;
        while(curr && curr.data!==data){
            prev=curr;
            curr=curr.next;
        }
        if(!curr){
            console.log(`No data found to delete`);
            return;
        }
        prev.next=curr.next;
        console.log(curr.data+" is deleted");
        //prev next is current and current which we have deleted
    }

    //let's Iterate LinkedList
    traverse(){
        console.log("-----------Tranversal-------------");
        let curr= this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }
}

const myList= new LinkedList();
myList.insertNodeAfter(10);
myList.insertNodeAfter(5);
myList.insertNodeAfter(7);
myList.insertNodeAfter(9);
myList.insertData(14,7);
myList.insertData(80,9);
myList.traverse();
myList.deleteNode(7);
myList.deleteNode(80);
myList.traverse();
myList.deleteNode(100);
