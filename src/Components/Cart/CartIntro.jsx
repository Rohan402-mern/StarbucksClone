import React from 'react'
import './CartIntro.css'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DecrementCart, IncrementCart } from '../../redux/counter/counterSlice'

const CartIntro = () => {
  const cart = useSelector((state)=>state.counter.cart)
  const dispatch = useDispatch();
  return (
    <div className='cartintro'>
      <div className="cartintro-1">
        <div className="cartintro-1-inner">
          <img src="https://www.starbucks.in/assets/icon/store.svg" alt="" />
          <h1>DINE-IN AT</h1>
        </div>
        <p>Platina Gachibowli</p>
      </div>
      <div className="cartintro-2">
        {cart.map((item)=>{
        return(
          <div className='cartintro-cont' key={item.id}>
          <div className='cartintro-item' >
            <div className="cartintro-item-1">
              <div className="cartintro-item1-s1">
                <div className='cartintro-items1-1'>
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className='cartintro-items1-2'>
                  <img src={item.typeUrl} alt="" />
                  <h1>{item.title}</h1>
                  <p>BLENDED TALL,Indian Espresso Roast (regular) - Def.. View More</p>
                </div>
              </div>
              <div className="cartintro-item1-s2">
                <svg onClick={()=>dispatch(DecrementCart({id:item.id}))} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" 
                fill="rgb(1, 129, 77)"><path d="M252-454v-52h456v52H252Z"/></svg>
                <p>{item.quantity}</p>
                <svg onClick={()=>dispatch(IncrementCart({id:item.id}))} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" 
                fill="rgb(1, 129, 77)"><path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z"/></svg>
              </div>
            </div>
            <div className="cartintro-item-2">
              <p>₹ {item.quantity*item.price}</p>
              <span><Link style={{color:'inherit'}} to={`/ordering/${item.title}`}>Customize</Link></span>
            </div>
            
            </div>
            <hr />
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default CartIntro
