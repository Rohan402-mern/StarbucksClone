import React from 'react'
import './OrderFooter.css'
import { useSelector } from 'react-redux'
const OrderFooter = ({title,info}) => {
  const cart = useSelector((state)=>state.counter.cart)
  return (
    <div className='orderfooter'>
        <div className="orderfooter-1">
            <img src="https://www.starbucks.in/assets/icon/info.png" alt="" />
        </div>
        <div style={cart.length ==0?{}:{marginBottom:'87px'}} className="orderfooter-2">
            <p>{title}</p>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default OrderFooter
