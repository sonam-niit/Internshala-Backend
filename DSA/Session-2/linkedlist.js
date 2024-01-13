class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{

    constructor(){
        this.head=null;
    }
    //insert data at the end of your Linked List
    insertData(num){
        //let's create new Node
        const newNode= new Node(num);
        //if the LinkedList is Empty then create newNode as Head
        if(this.head==null){
            this.head=newNode;
        }else{
            let curr= this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=newNode;
            //Iterate the Linkedlist untill it reaches to its last element and then
            //insert the newNode at last.
        }
    }
    insertNodeAfter(data){
        //Let's create new Node
        const newNode=new Node(data);
        if(!this.head || data< this.head.data){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let curr= this.head;
        while(curr.next && data>curr.next.data){
            curr=curr.next;
        }
        newNode.next=curr.next;
        curr.next=newNode;

    }
    deleteNode(data){
        if(!this.head){
            console.log("Linked list is Empty");
            return;
        }
        if(this.head.data===data){
            this.head=this.head.next;
            console.log("Node deleted successfully");
            return;
        }
        let curr=this.head;
        let prev=null;
        while(curr && curr.data!==data){
            prev=curr;
            curr=curr.next;
        }
        if(!curr){
            console.log("No node found to delete");
            return;
        }
        prev.next=curr.next; //curr is getting deleted.
    }

    display(){
        let curr= this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }
}

let myList= new LinkedList();
myList.insertNodeAfter("sonam");
myList.insertNodeAfter("ruchi");
myList.insertNodeAfter("parth");
myList.insertNodeAfter("abhishek");
myList.insertNodeAfter("prem");
myList.display();
myList.deleteNode("abhishek"); //delete first
myList.display();
myList.deleteNode("parth"); //delete middle
myList.display();
myList.deleteNode("sonam"); //delete last
myList.display();
myList.deleteNode("test"); //not available
