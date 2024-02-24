class HashTable{
    constructor(){
        this.table=[];
    }
    generateKey(num){
        return num%4;
    }
    insert(data){
        const key= this.generateKey(data);
        let arr= this.table[key]; //det that index value
        if(!arr)
            arr=[];
        arr.push(data);
        this.table[key]=arr;//add the updated array to that same key
    }
    search(num){
        let found=false;
        const key= this.generateKey(num);
        let arr= this.table[key]; 
        if(arr){
            for(let x of arr){
                if(x==num){
                    found=true;
                    break;
                }
            }
        }
        return found;
    }
}

const table= new HashTable();
table.insert(10);table.insert(3);table.insert(8);table.insert(9);
table.insert(7);table.insert(14);table.insert(13);table.insert(19);
console.log(table);
console.log(table.search(19)?' Found ': 'Not Found');
console.log(table.search(100)?' Found ': 'Not Found');