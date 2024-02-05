var rl = require('readline-sync');
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    traverse(){
        this.traverseTree(this.root)
    }
    traverseTree(node){
        if(node!=null){
            this.traverseTree(node.left);
            console.log(node.data);
            this.traverseTree(node.right);
        }
    }
    insert(data){
        let newNode= new Node(data);
        if(this.root===null){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    //logic for inserting node with comaparison of other nodes
    insertNode(node,newNode){
        if(newNode.data<node.data){
            if(node.left===null){
                node.left=newNode;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
}

const tree= new BinarySearchTree();
for(let i=1;i<=5;i++){
    tree.insert(Number(rl.question(`Enter ${i}th Number`)))
}
tree.traverse();