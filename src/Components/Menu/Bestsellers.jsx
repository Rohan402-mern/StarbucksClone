import React from 'react'
import OrderHead from '../ReuseOrder/OrderHead'
import OrderList from '../ReuseOrder/OrderList'
import OrderFooter from '../ReuseOrder/OrderFooter'
import ReuseNav from '../ReusableComponents/ReuseNav'
const Bestsellers = () => {
    
  return (
    <div>
      <ReuseNav items={["Bestseller","Drinks","Food","Merchandise","Coffee At Home","Ready to Eat"]} />
      <OrderHead title={"Bestseller"} info={"Everyone's favorite Starbucks put together in a specially curated collection."}/>
      <OrderList/>
      <OrderFooter title={'An average active adult requires 2,000 kcal energy per day, however, calorie needs may vary.'} info={"Grnd Flr,HotelLeMeridien,SurveyNo., 132(part),134(part)110(part)108(part)07, 104/2&136/3,Gachibowli,SerilingampalyMnd, Hyderabad, 500032 FSSAI License No. 13619013002053"} />
    </div>
  )
}

export default Bestsellers
