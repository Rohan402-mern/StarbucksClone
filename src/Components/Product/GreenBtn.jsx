import React from 'react'
import './GreenBtn.css'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
const GreenBtn = ({title,onclick,}) => {
  const size = useSelector((state)=>state.counter.size)
  // let istrue = false;
  // console.log(value)
  // console.log(size)
  const refbtn = useRef()
  const handleClick=()=>{
 
    if(refbtn.current ){
      refbtn.current.style.backgroundColor = 'white'
      refbtn.current.style.color = 'green'
    }
    if(onclick){
      onclick()
    }
  }
  return (
    <button ref={refbtn} onClick={handleClick}  className='greenbtn'>{title}</button>
  )
}

export default GreenBtn
