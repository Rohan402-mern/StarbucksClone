import React from 'react'
import './ProductLine.css'
const ProductLine = ({product}) => {
  // console.log(product.title)
  return (
    <div className='productline'>
      <div className='productline-nav'>
        <h1>CUSTOM ITEM</h1>
        <p>{product.title}</p>
      </div>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductLine
