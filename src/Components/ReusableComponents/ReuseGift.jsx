import React, { use } from 'react'
import './ReuseGift.css'
import ReuseItem from './ReuseItem'
import PopUp from '../PopUp/PopUp'
import { useSelector,useDispatch } from 'react-redux'
import { ModelChange } from '../../redux/counter/counterSlice'
const ReuseGift = ({head,items}) => {
  const showModel = useSelector((state)=>state.counter.showModel);
    const selectedGift = useSelector((state)=>state.counter.selectedGift);
  const dispatch = useDispatch();
  // console.log(selectedGift)
  return (
    <div className='reusegift'>
      <h1>{head}</h1>
      <hr />
      <div className='reusegift-cont'>
        {items.map((item,index)=>{
            return  <ReuseItem key={index} items={item}  />
        })}
        
      </div>
      {showModel && selectedGift && (
  <PopUp show={true} onClose={() => dispatch(ModelChange(false))}>
    {<div>
      <div><img src={selectedGift.imageUrl} alt="" /></div>
      <h1>{selectedGift.title}</h1>
      <p>{selectedGift.info}</p>
      </div>}
  </PopUp>
)}
    </div>
  )
}

export default ReuseGift
