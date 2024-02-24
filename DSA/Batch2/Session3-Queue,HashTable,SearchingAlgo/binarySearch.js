function binarySearch(array,search){
    let ub=array.length-1;
    let lb=0;
    while(lb<=ub){
        let m= Math.floor((lb+ub)/2);
        if(array[m]==search){
            console.log(`${search} Found at Index ${m}`);
            return;
        }
        if(array[m]>search){
            ub=m-1;
        }else{
            lb=m+1;
        }
    }
    if(lb>ub){
        console.log(`${search} not found`);
    }
}
const array=[1,2,5,9,10,15,20,25,27,30];
binarySearch(array,20);
binarySearch(array,45);
binarySearch(array,90);