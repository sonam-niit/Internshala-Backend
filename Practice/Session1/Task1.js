//Write a function which takes array as an argument and create new array from it by
//multiplying all elements with 4;

//array=[1,2,3,4,5,6,7]
//output=[4,8,12,16,20,24,28]

//Write without using any inbuit method

function method1(arr){
    const myArray=[];
    for(let i=0;i<arr.length;i++){
        myArray.push(arr[i]*4);
    }
    return myArray;
}

console.log( method1([1,2,3,4,5,6,7]));

function method2(arr){
    const myArray=[];
    for(let val of arr){
        myArray.push(val*4);
    }
    return myArray;
}

console.log( method2([1,2,3,4,5,6,7]));

function method3(arr){
    return arr.map((value)=>value*4);
}

console.log( method3([1,2,3,4,5,6,7]));

//Write with some inbuit method