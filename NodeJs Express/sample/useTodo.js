//Import
import sonam from "./todo.mjs";
import { addTodo as test, displayData, log, name, removeTodo } from "./todo.mjs";

test();
removeTodo();
displayData(name);
log.info('This is just an information Log..');
log.warning('Should not declare variable using var');

sonam();