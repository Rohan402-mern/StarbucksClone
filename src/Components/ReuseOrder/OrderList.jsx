import React from 'react'
import all_product from '../StarbucksProduct/all_product'
import ReuseCard from './ReuseCard'
import './OrderList.css'
import { useSelector,useDispatch } from 'react-redux'
import { ModelChange } from '../../redux/counter/counterSlice'
import PopUp from '../PopUp/PopUp'
import PopCard from '../PopUp/PopCard'
const OrderList = () => {

      const showModel = useSelector((state)=>state.counter.showModel);
      const selectedProduct = useSelector((state)=>state.counter.selectedProduct);
      // console.log(selectedProduct)
      const dispatch = useDispatch();
     const orderSwitch = useSelector((state)=>state.counter.orderSwitch);
    //  console.log(orderSwitch)
  return (
    <div className='orderlist'>
      <div>
        <div className="orderlist-cont">
            {all_product[orderSwitch].map((item)=>{
                
                return(
                  <div key={item.id}>
                 <ReuseCard items={item}  />
                </div>
            )})}
        </div>
      </div>
      {showModel && selectedProduct && (
  <PopUp show={true} onClose={() => dispatch(ModelChange(false))}>
    {<PopCard selectedProduct={selectedProduct} />}
  </PopUp>
)}
    </div>
  )
}

export default OrderList
