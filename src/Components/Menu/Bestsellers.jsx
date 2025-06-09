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
      <OrderFooter/>
    </div>
  )
}

export default Bestsellers
