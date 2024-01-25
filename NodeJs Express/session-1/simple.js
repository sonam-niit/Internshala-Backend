console.log("This is my plain JS code");

function test(){
    console.log("Hello from Test function");
}
function check(age){
    return age>=18;
}
test();
if(check(14)){
    console.log("User is Valid");
}else{
    console.log("User is Not valid");
}