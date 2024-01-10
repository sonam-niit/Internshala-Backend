import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import itemReducer from "./ItemReducer";


const rootReducer= combineReducers({
    counterReducer:counterReducer,
    itemReducer:itemReducer
})

export default rootReducer