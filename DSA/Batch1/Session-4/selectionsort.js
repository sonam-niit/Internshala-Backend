function selectionSort(arr){
    const n= arr.length;
    for(let i=0;i<n-1;i++){
        //Assume the current Index is the minimun
        let minIndex=i;
        //iterate to all and find the minimum number
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        //Swap the minimum index element with first element
        if(minIndex!==i){
            const temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
    }
    return arr;
}
const unSortedArray=[64,25,12,22,11];
const sortedArray=selectionSort(unSortedArray.slice());
console.log("Original Array: ",unSortedArray);
console.log("Sorted Array: ",sortedArray);