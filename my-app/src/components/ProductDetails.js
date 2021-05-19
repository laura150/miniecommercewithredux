import React , {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {selectedProduct} from '../redux/actions/productActions'
import ProductListing from './ProductListing'


const ProductDetails =  () =>{
    const {productId }= useParams()
    console.log(productId)
    const  product = useSelector((state)=>state.selectedProductReducer.products)
    
    console.log(product)
   const dispatch = useDispatch()
   console.log(dispatch)
   

   
    const fetchSingleProduct = async()=>{
    const response  = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err)=>console.log(err))

    console.log(response.data)
    dispatch(selectedProduct(response.data))
    }

    useEffect(()=>{
       if(productId && productId !=='') fetchSingleProduct()
    },[productId])
    return(
        <div>
        <h2>{product.description}</h2>
        </div>
    )
   
}

export default ProductDetails;
