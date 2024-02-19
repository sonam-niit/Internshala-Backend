function addNaturalNo() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(`Result is ${sum}`);
}

function sum(n){
    let sum= n* (n+ 1)/2;
    console.log(sum);
}
addNaturalNo();
sum(100);