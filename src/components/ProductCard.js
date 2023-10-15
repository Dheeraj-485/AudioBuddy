import React from 'react'
import "./ProductCard.css"

export const ProductCard = ({product}) => {
  const {id,name,Image,price} =product;
  return (
    <div className='productCard'>
      <img src={Image} alt={name} />
      <p className='name'>{name}</p>
      <div className='action'>
      <p>${price}</p>
      <button onClick={()=>{console.log(product.name);}}>Add to Cart</button>
      </div>
       
      </div>
  )
}