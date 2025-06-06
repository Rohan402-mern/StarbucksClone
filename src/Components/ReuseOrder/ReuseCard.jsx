import React from 'react'
import './ReuseCard.css'
import { useSelector,useDispatch } from 'react-redux'
import { ModelChange } from '../../redux/counter/counterSlice'
import BlueBtn from '../ReusableComponents/BlueBtn'
import { SetSelectedProduct } from '../../redux/counter/counterSlice'
import { Link } from 'react-router-dom'
const ReuseCard = ({items}) => {
   
      const dispatch = useDispatch();
  return (
    <div className='reusecard'>
      <div className="reusecard-1">
        <img src={items.imgUrl} onClick={()=>{ dispatch(SetSelectedProduct(items)); dispatch(ModelChange(true));} } alt="" />
      </div>
      <div className="reusecard-2">
        <div className="reusecard-typeUrl">
            <img src={items.typeUrl} alt="" />
            <h1>{items.title}</h1>
        </div>
        <p className='reusecard-info'>{items.info}</p>
        <div className='reusecard-summary'>{items.summary}</div>
        <div className="reusecard-btn">
            <p>{items.price}</p>
            <Link to={`/ordering/${items.title}`} style={{textDecoration:'none'}} ><BlueBtn /></Link>
        </div>
      </div>
     
    </div>
  )
}

export default ReuseCard
