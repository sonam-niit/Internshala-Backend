const array = [1, 2, 5, 9, 10, 15, 20, 25, 27, 30];

function searchNumber(array, search) {
    let ub = array.length - 1;
    let lb = 0
    while (lb <= ub) {
        let m = Math.floor((lb + ub) / 2);
        if (array[m] == search) {
            console.log("Element Found");
            break;
        }
        if (array[m] > search) {
            ub = m - 1;
        }
        else{
            lb = m + 1;
        }
    }
    if (lb > ub) {
        console.log("Element not Found");
    }
}

searchNumber(array,90);
searchNumber(array,20);
searchNumber(array,2);
searchNumber(array,45);
