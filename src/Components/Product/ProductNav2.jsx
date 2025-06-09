import React from 'react'
import './ProductNav2.css'
import ProductHead from './ProductHead'
import GreenBtn from './GreenBtn'
import { useSelector,useDispatch } from 'react-redux'
import { propChange } from '../../redux/counter/counterSlice'
const ProductNav2 = ({title,items}) => {
  const selectedProps = useSelector((state) => state.counter.selectedProps);
  const dispatch = useDispatch()
  return (
    <div className='productnav2'>
      <ProductHead title={title} />
      <ul>
        {items.map((item)=>{
            return <li key={item.name} ><GreenBtn selected={selectedProps[title] === item.name} onclick={()=> dispatch(propChange({ group: title, value:selectedProps[title] === item.name?'':item.name }))}  title={item.name} /> <p>{item.price}</p></li>
        })}
      </ul>
      <hr />
    </div>
  )
}

export default ProductNav2
