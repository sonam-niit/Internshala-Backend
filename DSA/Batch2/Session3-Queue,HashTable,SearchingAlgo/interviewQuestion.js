function checkEle(data){
    const array= data.split('');
    const map= new Map();

    for(let x of array){
        let key= x.toLowerCase();
        if(map.has(key)){
            let value= map.get(key);
            map.set(key,++value);
        }else{
            map.set(key,1);
        }
    }
    return map;
}
console.log(checkEle('knowledge'));
console.log(checkEle('Malayalam'));