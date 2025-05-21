import React from 'react'
import './Curations.css'
const Curations = ({imageUrl,name}) => {
  return (
    <div className='curations' >
      <img src={imageUrl} alt="" />
      <p>{name}</p>
    </div>
  )
}

export default Curations
