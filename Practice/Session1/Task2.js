//Count Characters: WAF which counts the occurances of each character in a string and returns 
//a object with a charcter counts
//str= malayalam
/*
    {
        m:2,
        a:3,
        l:2,
        y:1
    }
*/

function countCharacters(str){
    const map= new Map();
    for(let v of str){
        if(map.has(v)){
            map.set(v, map.get(v)+1)//Repeated occurance
        }else{
            map.set(v,1); //first occurance
        }
    }
    return map;
}

console.log(countCharacters('malayalam'));
console.log(countCharacters('hello'));

function countCharacters1(str){
   const obj={};
   for(let char of str){
    obj[char]= (obj[char]? obj[char] :0) +1
   }
   return obj;
}

console.log(countCharacters1('malayalam'));
console.log(countCharacters1('hello'));
