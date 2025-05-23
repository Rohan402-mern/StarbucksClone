import React from 'react'
import './ReuseGift.css'
import ReuseItem from './ReuseItem'
const ReuseGift = ({head,items}) => {
  return (
    <div className='reusegift'>
      <h1>{head}</h1>
      <hr />
      <div className='reusegift-cont'>
        {items.map((item)=>{
            return <ReuseItem imageUrl={item.imageUrl}  title ={item.title} info={item.info}   />
        })}
        
      </div>
    </div>
  )
}

export default ReuseGift
