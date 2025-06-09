import React from 'react'
import './ProductLine.css'
const ProductLine = ({product,custom}) => {
  // console.log(product.title)
  return (
    <div className='productline'>
      <div className='productline-nav'>
        <h1>{custom}</h1>
        <p>{product.title}</p>
      </div>
      <p>₹ {product.price}</p>
    </div>
  )
}

export default ProductLine
