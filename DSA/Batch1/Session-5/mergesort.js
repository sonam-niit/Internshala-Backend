function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    //compare elements from left and right and merge into this result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        }else{
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    //still some elements left to add in your array
    return result.concat(left.slice(leftIndex),right.slice(rightIndex));
}

const unsortedArray= [38,27,43,3,9,82,10];
const sortedArray= mergeSort(unsortedArray.slice());//Pass copy of array
console.log("Original Array ", unsortedArray);
console.log("Sorted Array: ",sortedArray);