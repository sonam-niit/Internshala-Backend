function mergeSort(array){

    console.log("--------------------------------------");
    if(array.length<=1){
        return array;
    }
    const middle= Math.floor(array.length/2);
    const leftHalf= array.slice(0,middle);
    console.log("Left Array",leftHalf);
    const rightHalf=array.slice(middle);
    console.log("Right Array",rightHalf);
    return merge(mergeSort(leftHalf),mergeSort(rightHalf));
}
function merge(left,right){
    let result=[];
    let leftIndex=0;
    let rightIndex=0;

    while(leftIndex<left.length&& rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex),right.slice(rightIndex));
}

const unSortedArray=[38,27,43,3,9,82,10];
const sortedArray=mergeSort(unSortedArray);
console.log(`Sorted Array is ${sortedArray}`);