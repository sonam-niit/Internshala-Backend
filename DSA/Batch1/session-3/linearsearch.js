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
console.log("1: ",searchNumber(array,1));//1 comp (Best Case) 
console.log("50: ",searchNumber(array,50)); //11 comp (Worst Case)
console.log("30",searchNumber(array,30)); //6 th comp  (Avg Case)
console.log("278",searchNumber(array,278)); //11th Comp (Worst Case)
//n comparisons
//if you have small data then your should use it not for huge data
