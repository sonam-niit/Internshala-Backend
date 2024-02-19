function quick_sort(arr,low=0,high=arr.length-1){

    if(low<high){
        //Partition the array and get the index of the pivot
        const partitionIndex=partition(arr,low,high);
        quick_sort(arr,low,partitionIndex-1);
        quick_sort(arr,partitionIndex+1,high);
    }
    return arr;
}
function partition(arr,low,high){
    //select last element as pivot
    const pivot= arr[high];
    //initialize the partition index
    let i= low-1;

    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            //swap i with j
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
    //swap arr[i+1] with pivot
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    return i+1;
}

const unsortedArray= [4,2,7,1,3];
const sortedArray= quick_sort(unsortedArray.slice());
console.log(unsortedArray);
console.log("sorted: ",sortedArray);