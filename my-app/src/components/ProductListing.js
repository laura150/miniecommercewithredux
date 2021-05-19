import React, {useEffect}from 'react'
import { useDispatch} from 'react-redux'
import { ProductComponent } from './ProductComponent'
import {setProducts} from '../redux/actions/productActions'
import axios from 'axios'

const ProductListing =  () =>{
     //const products = useSelector((state)=>state)
     //console.log(products)
    const dispatch = useDispatch()
     console.log('fine girl')
    const fetchProducts = async()=>{
      const response = await axios.get('https://fakestoreapi.com/products')
      .catch((err)=>{console.log(err)
      })

      console.log(response)
    
    dispatch(setProducts(response.data))
    } 
   

    useEffect(()=>{
       fetchProducts()
    },[])
    return(
        <div className={'list'}>
          <ProductComponent/>
        </div>
    )
}

export default ProductListing;

