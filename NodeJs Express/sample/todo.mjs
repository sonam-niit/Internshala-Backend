
//idndividual Export
export function displayData(data){
    console.log("Following is the Data")
    console.log("=============================");
    console.log(data)
}

function addTodo(){
    console.log("Task Added");
}
function removeTodo(){
    console.log("Task Removed");
}
//Single Export
export var name="Sonam";
//combining multiple functions into one variable
export var log={
    info: function(info){
        console.log('Info: '+info)
    },
    warning: function(warning){
        console.log(`Warning ${warning}`)
    },
    error:function(error){
        console.log(`Error ${error}`)
    }
}

export {addTodo,removeTodo}

function myApp(){
    console.log('My Function');
}
export default myApp;//Single var as export