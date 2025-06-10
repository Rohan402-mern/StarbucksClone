import React from 'react'
import './CartLast.css'
import ReuseInfo from './ReuseInfo'
const CartLast = () => {
  return (
    <div className='cartlast'>
      <ReuseInfo>
        {
          <div className='cartlast-1'>
            <div>
              <img src="https://www.starbucks.in/assets/icon/info_red.svg" alt="" />
            <h1>Order once placed cannot be cancelled</h1>
            </div>
            <p>Review your order and address details to avoid cancellations. Please avoid cancellations to prevent food wastage.</p>
          </div>
        }
      </ReuseInfo>
      <ReuseInfo>
        {
          <div className='cartlast-2'>
            <img src="https://www.starbucks.in/assets/icon/info_red.svg" alt="" />
            <p>Food/Beverage meant for immediate consumption only</p>
          </div>
        }
      </ReuseInfo>
    </div>
  )
}

export default CartLast
