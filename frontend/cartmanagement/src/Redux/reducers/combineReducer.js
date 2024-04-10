import {combineReducers} from 'redux';
import cartReducer from './cartreducer';
const rootReducer= combineReducers({
    cart:cartReducer
})

export default rootReducer;