import React from 'react'
import SmallNav from '../ReuseOrder/SmallNav'
import ReuseNav from '../ReusableComponents/ReuseNav'
const Foods = () => {
  return (
    <div>
      <ReuseNav items={["Bestseller","Drinks","Food","Merchandise","Coffee At Home","Ready to Eat"]} />
      <SmallNav items={["Sandwiches & Wraps","Croissants & More","Cookies & Desserts","Puffs & Pies","Bakery","Cakes"]}/>
    </div>
  )
}

export default Foods
