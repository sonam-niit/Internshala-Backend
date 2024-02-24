function linearSearch(array,search){
    let found=false;
    for(let x of array){
        if(x==search){
            found=true;
            break;
        }
    }
    return found;
}

console.log((linearSearch([1,2,3,4,5,6],6))?'Found':'Not found');
console.log((linearSearch([1,2,3,4,5,6],10))?'Found':'Not found');

function linearSearch2(array,search){
    return array.find((item)=>item==search);
}
console.log("Call Array Find function to find");
console.log((linearSearch2([1,2,3,4,5,6],6))?'Found':'Not found');
console.log((linearSearch2([1,2,3,4,5,6],10))?'Found':'Not found');