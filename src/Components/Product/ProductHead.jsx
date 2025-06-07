import React from 'react'
import './ProductHead.css'
const ProductHead = ({title}) => {
  return (
    <div className='productsize-size'>
        <span>{title}</span>
        <p>Select any one</p>
   </div>
  )
}

export default ProductHead

