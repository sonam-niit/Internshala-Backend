function bubblesort(array){
    const pass= array.length-1;

    for(let p=1;p<=pass;p++){
        console.log(`No of Pass ${p}`);
        console.log("----------------------------------");
        for(let j=0;j<array.length-p;j++){
            console.log(`Value of j: ${j}`);
            if(array[j]>array[j+1]){
                console.log(`Swapping of ${array[j]} with ${array[j+1]}`);
                let temp= array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            console.log(array);
        }
    }
    return array;
}

console.log(bubblesort([5,3,8,1,2]));