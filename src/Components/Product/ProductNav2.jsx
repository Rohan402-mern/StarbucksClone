import React from 'react'
import './ProductNav2.css'
import ProductHead from './ProductHead'
import GreenBtn from './GreenBtn'
const ProductNav2 = ({title,items}) => {
  return (
    <div className='productnav2'>
      <ProductHead title={title} />
      <ul>
        {items.map((item)=>{
            return <li key={item.name} ><GreenBtn title={item.name} /> <p>{item.price}</p></li>
        })}
      </ul>
      <hr />
    </div>
  )
}

export default ProductNav2
