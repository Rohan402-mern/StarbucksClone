import React from 'react'
import ReuseHead from '../Components/ReusableComponents/ReuseHead'
import OrderDine from '../Components/Order/OrderDine'
import OrderMain from '../Components/Order/OrderMain'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Order = () => {
  const showModel = useSelector((state)=>state.counter.showModel)
   useEffect(() => {
    if (showModel) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showModel])
  const dispatch = useDispatch()
  return (
    <div style={showModel === true? {overflow:'hidden'}:{}}>
      <ReuseHead title={<div><Link onClick={()=>dispatch(barChange("home"))} to={"/dashboard"} style={{textDecoration:'none',color:'inherit'}}>Home</Link> &gt; Order</div>} />
      <OrderDine/>
      <OrderMain/>
    </div>
  )
}

export default Order
