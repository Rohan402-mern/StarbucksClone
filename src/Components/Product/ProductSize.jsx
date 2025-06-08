import React from 'react'
import './ProductSize.css'
import ProductNav from './ProductNav'
import ProductNav2 from './ProductNav2'
import { useSelector,useDispatch } from 'react-redux'
import { isYes } from '../../redux/counter/counterSlice'
const ProductSize = ({product}) => {
    const yes = useSelector((state)=>state.counter.yes)
    const dispatch = useDispatch();
    // console.log(product.customize)
  return (
    <div className='productsize'>
      <div className="productsize-s1" style={yes === 'size'? {backgroundColor:'#1E3932',}:{}} onClick={()=>dispatch(isYes(yes ==='size'?'':'size'))}>
        <h1 style={yes === 'size'? {color:'white',}:{color:'rgb(30, 57, 50)'}} >CUSTOMISE YOUR ORDER  (Default)</h1>
      <p style={yes === 'size'? {color:'white',}:{color:'rgb(30, 57, 50,0.84)'}}>TALL,Indian Espresso Roast (Regular) - Default</p>
      </div>
      <div className='productsize-s2' style={{display:yes === 'size'?'block':'none'}} >
        <hr />
        <div className="productsize-s2-inner">
          <ProductNav product={product} />
          {Object.entries(product.customize).map(([key, value]) => (
           <ProductNav2 key={key} title={key} items={value} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default ProductSize
