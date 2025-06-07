import React from 'react'
import './ProductNav.css'
import GreenBtn from './GreenBtn'
import ProductHead from './ProductHead'
import { useSelector,useDispatch } from 'react-redux'
import { sizeChange } from '../../redux/counter/counterSlice'
const ProductNav = () => {
  const dispatch = useDispatch();
  const size = useSelector((state)=>state.counter.size);
  // console.log(size)
  return (
    <div className='productnav'>
      <ProductHead title={"SIZE"} />
            <div className="productsize-cup">
               <ul>
                  <li>
                    <div className='productsize-prevent'>
                      <img src={size === 'tall'? "https://www.starbucks.in/assets/icon/coffe-tsb-selectd.svg":"https://www.starbucks.in/assets/icon/tsb-coffe.png"} alt="" />
                    </div>
                    <GreenBtn  title={"TALL"} onclick={()=>dispatch(sizeChange('tall'))} />
                    <p>354 ml- ₹ 0.00</p>
                  </li>
                  <li>
                    <div className='productsize-prevent' >
                      <img src={size === 'grande'? "https://www.starbucks.in/assets/icon/coffe-tsb-selectd.svg":"https://www.starbucks.in/assets/icon/tsb-coffe.png"} alt=''/>
                      </div>
                      <GreenBtn onclick={()=>dispatch(sizeChange('grande'))} title={"GRANDE"} />
                      <p>473 ml- ₹ 47.25</p>
                      
                 </li>
                  <li>
                    <div className='productsize-prevent' >
                     <img src={size === 'venti'? "https://www.starbucks.in/assets/icon/coffe-tsb-selectd.svg":"https://www.starbucks.in/assets/icon/tsb-coffe.png"} alt=''/>
                      </div>
                     <GreenBtn  onclick={()=>dispatch(sizeChange('venti'))} title={"VENTI"} />
                     <p>591 ml- ₹ 94.5</p>
                    
                 </li>
                      </ul>
                  </div>
                  <hr />
    </div>
  )
}

export default ProductNav
