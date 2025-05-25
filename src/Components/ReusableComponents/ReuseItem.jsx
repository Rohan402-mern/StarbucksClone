import React from 'react'
import './ReuseItem.css'
import Bluebtn from './BlueBtn'
const ReuseItem = ({imageUrl,info,title}) => {
  
  return (
    <div className='reuseitem'>
        <div className='reuseitem-main'>
      <img src={imageUrl} alt="" />
      <div className='reuseitem-cont'>
        <h1>{title}</h1>
        <p>{info}</p>
        <Bluebtn/>
      </div>
      </div>
    </div>
  )
}

export default ReuseItem
