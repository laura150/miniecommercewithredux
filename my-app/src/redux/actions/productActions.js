import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "./types/actionTypes"

export const setProducts = (products)=>{
    console.log(products)
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (products)=>{
    console.log(products)
    return{
        type: SELECTED_PRODUCT,
        payload: products
        
    }
}

export const removeSelectedProduct= ()=>{
    return{
        type: REMOVE_SELECTED_PRODUCT
    }
}
