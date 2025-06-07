import React from 'react'
import './ProductSize.css'
import ProductNav from './ProductNav'
import ProductHead from './ProductHead'
import ProductNav2 from './ProductNav2'
import { useSelector,useDispatch } from 'react-redux'
import { isYes } from '../../redux/counter/counterSlice'
const ProductSize = () => {
    const yes = useSelector((state)=>state.counter.yes)
    const dispatch = useDispatch();
  return (
    <div className='productsize'>
      <div className="productsize-s1" style={yes === true? {backgroundColor:'#1E3932',}:{}} onClick={()=>dispatch(isYes())}>
        <h1 style={yes === true? {color:'white',}:{color:'rgb(30, 57, 50)'}} >CUSTOMISE YOUR ORDER  (Default)</h1>
      <p style={yes === true? {color:'white',}:{color:'rgb(30, 57, 50,0.84)'}}>TALL,Indian Espresso Roast (Regular) - Default</p>
      </div>
      <div className='productsize-s2' style={{display: yes === true? 'block':'none'}} >
        <hr />
        <div className="productsize-s2-inner">
            <ProductNav/>
            <ProductNav2 title={"MILK"} items={[{name:'Skimmed Milk',price:'+ ₹ 0.00'}]} />
            <ProductNav2 title={"NON-DAIRY ALTERNATIVES"} items={[{name:'soya',price:"+ ₹ 68.25"},{name:'Almond',price:"+ ₹ 89.25"},{name:'Oats',price:"+ ₹ 89.25"}]} />
            <ProductNav2 title={"CHOICE OF ESPRESSO"} items={[{name:'Extra Shot',price:"+ ₹ 68.25"},{name:'Indian Expresso Roast (regular) - Default',price:"+ ₹ 0.00"}]} />
            <ProductNav2 title={"ICE"} items={[{name:'No Ice',price:"+ ₹ 68.25"},{name:'Less Ice',price:"+ ₹ 0.00"},{name:'Extra Ice',price:"+ ₹ 0.00"}]} />
        </div>
      </div>

    </div>
  )
}

export default ProductSize
