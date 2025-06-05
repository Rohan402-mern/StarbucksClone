import React from 'react'
import OrderHead from '../ReuseOrder/OrderHead'
import OrderList from '../ReuseOrder/OrderList'
import OrderFooter from '../ReuseOrder/OrderFooter'
import SmallNav from '../ReuseOrder/SmallNav'
import ReuseNav from '../ReusableComponents/ReuseNav'
const Drinks = () => {
  return (
    <div>
      <ReuseNav items={["Bestseller","Drinks","Food","Merchandise","Coffee At Home","Ready to Eat"]} />
      <SmallNav items={["Espresso","Frappuccino Blended Beverages","Other Beverages","Brewed Coffee","Tea","Cold Brew","Bottled Beverage"]} />
      <OrderHead title={"Espresso"} info={"Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do."}/>
      
      <OrderList/>
      <OrderFooter/>
    </div>
  )
}

export default Drinks
