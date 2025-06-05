import React from 'react'
import './ReuseCard.css'
import { useSelector,useDispatch } from 'react-redux'
import { ModelChange } from '../../redux/counter/counterSlice'
import BlueBtn from '../ReusableComponents/BlueBtn'
import { SetSelectedProduct } from '../../redux/counter/counterSlice'
const ReuseCard = ({imgUrl,typeUrl,title,info,summary,price}) => {
   
      const dispatch = useDispatch();
  return (
    <div className='reusecard'>
      <div className="reusecard-1">
        <img src={imgUrl} onClick={()=>{dispatch(ModelChange(true)); dispatch(SetSelectedProduct({imgUrl,typeUrl,title,info,summary,price}))}} alt="" />
      </div>
      <div className="reusecard-2">
        <div className="reusecard-typeUrl">
            <img src={typeUrl} alt="" />
            <h1>{title}</h1>
        </div>
        <p className='reusecard-info'>{info}</p>
        <div className='reusecard-summary'>{summary}</div>
        <div className="reusecard-btn">
            <p>{price}</p>
            <BlueBtn/>
        </div>
      </div>
     
    </div>
  )
}

export default ReuseCard
