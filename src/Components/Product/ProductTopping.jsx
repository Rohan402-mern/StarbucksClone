import React from 'react'
import './ProductTopping.css'
import ProductNav3 from './ProductNav3'
import { useSelector,useDispatch } from 'react-redux'
import { isYes } from '../../redux/counter/counterSlice'
const ProductTopping = ({product}) => {
    
    const yes = useSelector((state)=>state.counter.yes)
    // console.log(yes)
    const dispatch = useDispatch();
  return (
    <div className='producttopping'>
      <div className="producttopping-s1"  style={yes === 'topping'? {backgroundColor:'#1E3932',}:{}} onClick={()=>dispatch(isYes(yes ==='topping'?'':'topping'))} >
            <h1 style={yes === 'topping'? {color:'white',}:{color:'rgb(30, 57, 50)'}}>AMP UP YOUR ORDER WITH ADD-ONS</h1>
            <p style={yes === 'topping'? {color:'white',}:{color:'rgb(30, 57, 50,0.84)'}}>Mocha Sauce - Default, With Whipped Topping</p>
      </div>
      <div className='productsize-s2' style={{display: yes === 'topping'? 'block':'none'}} >
        <hr />
        <div className="productsize-s2-inner">
            {Object.entries(product.topping).map(([key, value]) => (
              <ProductNav3 title={key} key={value} items={value}  />
              
             ))}
        </div>
      </div>
    </div>
  )
}

export default ProductTopping
