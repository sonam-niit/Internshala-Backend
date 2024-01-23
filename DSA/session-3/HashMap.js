const map= new Map();
map.set(1,'Sonam');
map.set(2,'Ekta');
map.set(3,'Bhavya');
map.set(4,'Harshi');
console.log(map.size);
console.log(map);
console.log(map.get(4));
console.log(map.has(5));
 
map.delete(3);
console.log(map);

map.forEach((value,key)=>{
    console.log(key+" "+value);
})