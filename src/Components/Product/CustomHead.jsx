import React from 'react'
import './CustomHead.css'
const CustomHead = ({title,info}) => {
  return (
    <div className='customhead'>
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  )
}

export default CustomHead
