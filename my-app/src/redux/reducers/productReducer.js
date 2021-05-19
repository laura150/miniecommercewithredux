import { SET_PRODUCTS ,SELECTED_PRODUCT} from "../actions/types/actionTypes";

let initialState = {
    items: [],
    products :{}
}

export const productReducer= (state=initialState, action) =>{
    console.log(action)
 switch(action.type){
     case SET_PRODUCTS: 
     return {...state, items: action.payload} 

     default:
         return state
 }
}

export const selectedProductReducer = (state={}, action)=>{
   // console.log(action)
     switch(action.type){
       case SELECTED_PRODUCT:
           return {...state, products: action.payload} 
          default:
              return state 
     }
}