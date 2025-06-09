import React from 'react'
import './ProductNav.css'
import GreenBtn from './GreenBtn'
import ProductHead from './ProductHead'
import { useSelector,useDispatch } from 'react-redux'
import { sizeChange } from '../../redux/counter/counterSlice'
const  ProductNav = ({product}) => {
  const dispatch = useDispatch();
  const size = useSelector((state)=>state.counter.size);
  // console.log(size)
  return (
    <div className='productnav'>
      <ProductHead title={"SIZE"} />
        <div className='productsize-cup'>
           <ul className="">
              {product?.SIZE && Object.entries(product.SIZE).map(([key, item]) => (
                <li key={key}>
                 <div className="productsize-prevent">
                   <img src={ size === item.name ? "https://www.starbucks.in/assets/icon/coffe-tsb-selectd.svg" : "https://www.starbucks.in/assets/icon/tsb-coffe.png" }   alt="" />
                 </div>
                 <GreenBtn selected={size === item.name} title={item.name.toUpperCase()} onclick={() => dispatch(sizeChange(item.name))} />
                 <p>{item.volume} - {item.price}</p>
               </li>
              ))}
           </ul>
        </div>
        <hr />
    </div>
  )
}

export default ProductNav
