//array: 6,3,9,5,2,8
function quickSort(array, low = 0, high = array.length - 1) {

    if (low < high) {
        const partitionIndex = partition(array, low, high);
        quickSort(array, low, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, high);
    }
    return array;
}
function partition(array, low, high) {
    //select last element as Pivot
    const pivot = array[high];
    //start with the partition index
    let i =low-1; //-1
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            //swap i with j
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    //swap element with pivot to put pivot to its correct position
    const temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    return i + 1;
}

const unSortedArray = [6, 3, 9, 5, 2, 8];
const sortedArray = quickSort(unSortedArray);
console.log(sortedArray);