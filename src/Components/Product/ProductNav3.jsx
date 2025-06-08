import React from 'react'
import './ProductNav3.css'
import ProductHead from './ProductHead'
const ProductNav3 = ({title,items}) => {
  // console.log(items)
  return (
    <div className='productnav3'>
      <ProductHead title={title} />
      <ul>
      { items.map((item)=>{
        return(
          <div className='productnav3-div' key={item.name}>
          <li className='productnav3-li'>
            <h1>{item.name}</h1>
            <p>{item.price !== undefined ? `+ ₹ ${Number(item.price)}` : ''}</p>
          </li>
          <div className='productnav3-input'>
            <p className='productnav3-input-p'>-</p>
            <p>0</p>
            <p className='productnav3-input-p'>+</p>
          </div>
          </div>
        )
      })}
      </ul>
      <hr />
    </div>
  )
}

export default ProductNav3
