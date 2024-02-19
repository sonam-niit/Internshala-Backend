class HashTable{

    constructor(){
        this.array=new Array(127);
        this.size=0;
    }

    generateKey(num){
        return num%4;
    }
    insert(num){
        const key= this.generateKey(num);
        let arr= this.array[key];
        if(!arr){
            arr=[];
        }
        arr.push(num);
        this.array[key]=arr;
        this.size++;
    }
    search(num){
        let found=false;
        const key= this.generateKey(num);
        const arr= this.array[key];
        if(!arr){
            return found;
        }else{
            for(let x of arr){
                if(x==num){
                    found=true;
                }
            }
        }

        return found;
    }
}

const ht= new HashTable();
ht.insert(10);
ht.insert(3);
ht.insert(8);
ht.insert(9);
ht.insert(7);
ht.insert(14);
ht.insert(13);
ht.insert(19);
ht.insert(70);
console.log(ht);

if(ht.search(9)){
    console.log("found");
}else{
    console.log("Not Found");
}