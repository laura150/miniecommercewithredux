import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export const ProductComponent =  () =>{
    const items = useSelector( (state) => state.productReducer.items)
    console.log(items, '')
    const renderList = items.map((item)=>{
        const {id, image, title, price, category} = item
        return(
        <article className={'four column wide' } key={id}>
            <Link to={`/products/${id}`}> 
            <div className={'ui link cards'}>
                <div className={'card'}>
                    <div className={'image'}><img src={image} alt={title}/></div>
                      <div className={'content'}>
                          <div className={'header'}>{title}</div>
                          <div className={'meta-price'}>{price}</div>
                          <div className={'meta'}>{category}</div>
                     </div>
                    </div>
                    
                </div>
                </Link>
        </article>
        )
    })
    

    //const {id, title} = products[0]
    return(
        <>{renderList}</>
    )
}