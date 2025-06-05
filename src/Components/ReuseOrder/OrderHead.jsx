import React from 'react'
import './OrderHead.css'
const OrderHead = ({title,info}) => {
  return (
    <div className='orderhead'>
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  )
}

export default OrderHead
