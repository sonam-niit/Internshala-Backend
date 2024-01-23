const array=[1,4,5,8,19,30,45,78,90,345,278];

//search number from an array

function searchNumber(array,search){
    let found=false;
    for(let ele of array){
        if(ele==search){
            found=true;
            break;
        }
    }

    return found;
}

console.log("50: ",searchNumber(array,50));
console.log("90",searchNumber(array,90));
console.log("278",searchNumber(array,278));
