function selectionSort(arr){
    const n= arr.length;
    for(let i=0;i<n-1;i++){
        console.log(`-------------PASS ${i+1}------------`);
        let minIndex=i; //min index starts from first element

        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        console.log(`Smallest Element is ${arr[minIndex]}`);
        //above loop will find out the smallest element
        //lets swap it
        if(minIndex!==i){
            let temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
        console.log(arr);
    }
}

selectionSort([64,32,25,12,22,11,90])