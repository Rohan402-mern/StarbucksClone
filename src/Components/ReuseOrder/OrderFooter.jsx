import React from 'react'
import './OrderFooter.css'
import { useSelector } from 'react-redux'
const OrderFooter = () => {
  const cart = useSelector((state)=>state.counter.cart)
  return (
    <div className='orderfooter'>
        <div className="orderfooter-1">
            <img src="https://www.starbucks.in/assets/icon/info.png" alt="" />
        </div>
        <div style={cart.length ==0?{}:{marginBottom:'87px'}} className="orderfooter-2">
            <p>An average active adult requires 2,000 kcal energy per day, however, calorie needs may vary.</p>
            <p>Grnd Flr,HotelLeMeridien,SurveyNo., 132(part),134(part)110(part)108(part)07, 104/2&136/3,Gachibowli,SerilingampalyMnd, Hyderabad, 500032
FSSAI License No. 13619013002053</p>
        </div>
    </div>
  )
}

export default OrderFooter
