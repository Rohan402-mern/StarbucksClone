import React from 'react'
import './ProductTopping.css'
import ProductNav from './ProductNav'
import ProductNav2 from './ProductNav2'
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
            <ProductNav product={product} />
            <ProductNav2 title={"MILK"} items={[{name:'Skimmed Milk',price:'+ ₹ 0.00'}]} />
            <ProductNav2 title={"NON-DAIRY ALTERNATIVES"} items={[{name:'soya',price:"+ ₹ 68.25"},{name:'Almond',price:"+ ₹ 89.25"},{name:'Oats',price:"+ ₹ 89.25"}]} />
            <ProductNav2 title={"CHOICE OF ESPRESSO"} items={[{name:'Extra Shot',price:"+ ₹ 68.25"},{name:'Indian Expresso Roast (regular) - Default',price:"+ ₹ 0.00"}]} />
            <ProductNav2 title={"ICE"} items={[{name:'No Ice',price:"+ ₹ 68.25"},{name:'Less Ice',price:"+ ₹ 0.00"},{name:'Extra Ice',price:"+ ₹ 0.00"}]} />
        </div>
      </div>
    </div>
  )
}

export default ProductTopping
