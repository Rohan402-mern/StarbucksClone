import React from 'react'
import './ProductAdd.css'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const ProductAdd = ({product,add,onclick,navigate}) => {
  const cart = useSelector((state)=> state.counter.cart)
  const Navigate = useNavigate()
  // console.log(cart)
  const handleBtn=()=>{
    Navigate(navigate)
    // console.log('naviagte')
  }
  
  // console.log(product.id)
  const dispatch = useDispatch()
  return (
    <div className='productadd'>
      <button onClick={()=>{if (onclick){onclick()};handleBtn();}} >{add}</button>
    </div>
  )
}

export default ProductAdd
