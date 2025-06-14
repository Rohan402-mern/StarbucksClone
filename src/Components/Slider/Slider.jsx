import './Slider.css'
import React from 'react'
import { useEffect,useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { indexChange } from '../../redux/counter/counterSlice' 
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Slider4 from './Slider4'
const Slider = () => {
 const slide = useSelector((state)=>state.counter.slide);
 const slideRef = useRef();
 const dispatch = useDispatch();
// console.log(slide)
 const handleClick=(direction)=>{
  let newIndex = slide +direction;
 if(newIndex>3)newIndex=3;
 if(newIndex<0) newIndex = 0;

  slideRef.current.style.transform = `translateX(-${newIndex*100}%)`
  dispatch(indexChange(newIndex))
 }


  return (
    <div className='slider'>
      <div className="slider-cont">
        <div ref={slideRef} className='slider-inner-cont'>
        <Slider1/>
        <Slider2/>
        <Slider3/>
        <Slider4/>
        </div>
      </div>
      <img onClick={()=>handleClick(-1)} style={{opacity:slide === 0?'0.35':'1'}} className='slider-img1' src="https://www.starbucks.in/media/swiperbtnleft-ELPH6PUN.svg" alt="" />
      <img onClick={()=>handleClick(1)} style={{opacity:slide === 3?'0.35':'1'}} className='slider-img2' src="https://www.starbucks.in/media/swiperbtnright-ZPA5GCMU.svg" alt="" />
    </div>
  )
}

export default React.memo(Slider)



