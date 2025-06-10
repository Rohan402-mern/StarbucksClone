import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReuseHead from '../Components/ReusableComponents/ReuseHead'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ProductLine from '../Components/Product/ProductLine'
import ProductAdd from '../Components/Product/ProductAdd'
import CartIntro from '../Components/Cart/CartIntro'
import CartReward from '../Components/Cart/CartReward'
import Barista from '../Components/Barista/Barista'
import CartText from '../Components/Cart/CartText'
import CartBill from './CartBill'
import CartLast from '../Components/Cart/CartLast'
const Cart = () => {
    const cart = useSelector((state)=>state.counter.cart)
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const allItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const TotalPrice = cart.reduce((sum,item)=> sum+=item.quantity*item.price,0) 
    useEffect(() => {
      if(cart.length === 0){
        Navigate('/ordering')
      }
    }, [cart,Navigate])
    
  return (
    <div>
        <ReuseHead title={<div><Link onClick={()=>dispatch(barChange("home"))} to={"/dashboard"} style={{textDecoration:'none',color:'inherit'}}>Home</Link> &gt; <Link onClick={()=>dispatch(barChange("order"))} to={"/ordering"} style={{textDecoration:'none',color:'inherit'}}>Order</Link> &gt; Your Cart</div>} />
        <CartIntro/>
        <CartReward/>
        <Barista title={'Popular Choice'} view={''}/>
        <CartText/>
        <CartBill/>
        <CartLast/>
        {cart.length == 0 ? '':
        <div style={{position:'fixed',bottom:'0',width:'100%'}}>
          <ProductLine custom={`${allItems} ${allItems ==1?'ITEM ADDED':'ITEMS ADDED'}`} product={{title:cart.length == 1 ? cart[0].title:`${cart[0].title} ...+ ${cart.length -1} more` ,price:` ${(TotalPrice).toFixed(2)}`}} />
          <ProductAdd add={"Continue with Payment"} navigate={''} />
        </div>
        }
    </div>
  )
}

export default Cart
