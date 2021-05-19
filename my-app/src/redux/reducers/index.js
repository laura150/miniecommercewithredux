import {combineReducers} from 'redux'
import {productReducer, selectedProductReducer} from './productReducer'
export const allReducers = combineReducers({
     productReducer,
     selectedProductReducer
})
    