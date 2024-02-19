function bubblesort(arr){
    const n= arr.length;
    for(let i=0;i<n-1;i++){
        for (let j=0;j<n-i;j++){
            //arr[j]=rice
            //arr[j+1]=dal
            if(arr[j]>arr[j+1]){
                //swap logic
                const temp= arr[j]; //temp=rice
                arr[j]=arr[j+1];//rice=dal
                arr[j+1]=temp;//dal=temp
            }
        }
    }
    return arr;
}

const unSortedArray=[5,2,9,1,4,7];
const sortedArray=bubblesort(unSortedArray.slice());
console.log("Sorted Array: ",sortedArray);
console.log("Original Array: ",unSortedArray);