import React from 'react'
import ReuseHead from '../Components/ReusableComponents/ReuseHead'
import OrderDine from '../Components/Order/OrderDine'
import ReuseNav from '../Components/ReusableComponents/ReuseNav'
import OrderMain from '../Components/Order/OrderMain'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const Order = () => {
  const showModel = useSelector((state)=>state.counter.showModel)
   useEffect(() => {
    if (showModel) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup in case the component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showModel])
  return (
    <div style={showModel === true? {overflow:'hidden'}:{}}>
      <ReuseHead title={<div>Home &gt; Order</div>} />
      <OrderDine/>
      <OrderMain/>
    </div>
  )
}

export default Order
