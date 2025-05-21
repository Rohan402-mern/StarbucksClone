import React from 'react'
import './Scroller.css'
import { useDispatch,useSelector } from 'react-redux'
import { indexChange } from '../../redux/counter/counterSlice'
const Scroller = () => {
    const slide = useSelector((state)=>state.counter.slide);
    const dispatch = useDispatch()

  return (
    <div className='scroller'>
        <div className='scroller-cont'>
            <div style={{right:`-${slide*25}%`,transition:'0.25s ease-out'}}></div>
        </div>
    </div>
  )
}

export default Scroller
