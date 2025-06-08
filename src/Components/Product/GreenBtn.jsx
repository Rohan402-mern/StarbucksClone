import React from 'react'
import './GreenBtn.css'
import { useSelector } from 'react-redux'
const GreenBtn = ({title,onclick,selected}) => {
  const size = useSelector((state)=>state.counter.size)

  
  return (
    <button onClick={onclick}  className={`greenbtn ${selected?'selected':''}  `} >{title}</button>
  )
}

export default GreenBtn
