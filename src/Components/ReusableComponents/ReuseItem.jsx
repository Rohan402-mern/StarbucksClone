import React from 'react'
import './ReuseItem.css'
import Bluebtn from './BlueBtn'
import { SetSelectedGift } from '../../redux/counter/counterSlice'
import { useDispatch } from 'react-redux'
import { ModelChange } from '../../redux/counter/counterSlice'
const ReuseItem = ({items}) => {
  const dispatch = useDispatch()
  return (
    <div className='reuseitem'>
        <div className='reuseitem-main'>
      <img src={items.imageUrl} onClick={()=>{dispatch(SetSelectedGift(items)); dispatch(ModelChange(true));}} alt="" />
      <div className='reuseitem-cont'>
        <h1>{items.title}</h1>
        <p>{items.info}</p>
        <Bluebtn/>
      </div>
      </div>
    </div>
  )
}

export default ReuseItem
