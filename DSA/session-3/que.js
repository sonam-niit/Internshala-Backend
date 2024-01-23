const word="malayalam";

const arr= word.split('');
const map= new Map();
for(let key of arr){
    if(map.has(key)){
        let value= map.get(key);
        map.set(key,value+1);
    }else{
        map.set(key,1);
    }
}

console.log(map);