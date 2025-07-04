import React from 'react'
import './BlueBtn.css'
import { useSelector,useDispatch } from 'react-redux'
import { DecrementCart, IncrementCart } from '../../redux/counter/counterSlice'
const BlueBtn = ({items}) => {
const cart = useSelector((state)=>state.counter.cart)
const isExisting = cart.find(product=> product.id === items.id );
const dispatch = useDispatch();
// console.log(isExisting)
  return (
      <button  className='bluebtn' disabled={false} style={{padding:isExisting?'4px 7px':'8px 20px'}} >{isExisting?<div className='bluebtn-input'>
        <svg onClick={()=>dispatch(DecrementCart({id:items.id}))} xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="rgb(255,255,255)"><path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg >
        <p>{isExisting.quantity}</p>
        <svg onClick={()=> dispatch(IncrementCart({id:items.id}))} xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="rgb(255,255,255)"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>

      </div>:'Add Item'}</button>
  )
}

export default BlueBtn
