import React from 'react'
import ReuseHead from '../Components/ReusableComponents/ReuseHead'
import OrderDine from '../Components/Order/OrderDine'
import OrderMain from '../Components/Order/OrderMain'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductLine from '../Components/Product/ProductLine'
import ProductAdd from '../Components/Product/ProductAdd'

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
  const cart = useSelector((state)=>state.counter.cart)
  const allItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const TotalPrice = cart.reduce((sum,item)=> sum+=item.quantity*item.price,0) 
  // console.log(allItems)
  // console.log(TotalPrice)
  return (

    <div style={showModel === true? {overflow:'hidden'}:{}}>
      <ReuseHead title={<div><Link onClick={()=>dispatch(barChange("home"))} to={"/dashboard"} style={{textDecoration:'none',color:'inherit'}}>Home</Link> &gt; Order</div>} />
      <OrderDine/>
      <OrderMain/>
      {cart.length == 0 ? '':
        <div style={{position:'fixed',bottom:'0',width:'100%'}}>
          <ProductLine custom={`${allItems} ${allItems ==1?'ITEM ADDED':'ITEMS ADDED'}`} product={{title:cart.length == 1 ? cart[0].title:`${cart[0].title} ...+ ${cart.length -1} more` ,price:` ${(TotalPrice).toFixed(2)}`}} />
          <ProductAdd add={"View Cart"} navigate={'/ordering/cart'} />
        </div>
        }
    </div>
  )
}

export default Order
