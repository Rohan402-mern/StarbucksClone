import React from 'react'
import './CartBill.css'
import { useSelector } from 'react-redux'
const CartBill = () => {
    const cart = useSelector((state)=>state.counter.cart)
    const total = cart.reduce((sum,item)=>sum+=item.quantity*item.price,0 )
    const taxes = total*0.047619
    // console.log(cart)
  return (
    <div className='cartbill'>
        <div className='cartbill-cont'>
        <h1>BILL DETAIL</h1>
        <div className="cartbill-1">
            <ul>
                <li>
                    <p>Sub Total</p>
                    <span>₹ {(total - (taxes).toFixed(2)).toFixed(2)}</span>

                </li>
                <li>
                    <p>Discount</p>
                    <span>- ₹ 0.00</span>
                    
                </li>
                <li>
                    <p>Taxes</p>
                    <span>₹ {(taxes).toFixed(2)}</span>
                </li>
            </ul>
            <hr />
            <div className='cartbill-total'>
                <h1>TOTAL</h1>
                <span>₹ {(total).toFixed(2)}</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CartBill
