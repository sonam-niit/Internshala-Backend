const map= new Map();
map.set(1,'Sonam');
map.set(2,'Ekta');
map.set(3,'Nandita');
map.set(4,'Rohan');

console.log(map);
//check key present
console.log(map.has(4));
//get Value based on key
console.log(map.get(3));
//remove key
console.log(map.delete(1));
console.log(map);
//Iteration
map.forEach((value,key)=>{
    console.log(key+": "+value);
})
const keys=map.keys();
for(let key of keys){
    console.log(key+": "+map.get(key));
}