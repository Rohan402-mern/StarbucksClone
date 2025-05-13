import React from 'react'
import './Slider.css'
const Slider = () => {
  return (
    <div className='slider'>
      <div className="slider-cont">
        <div className="slider-1">
          {/* <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ASSET_aad6872b43.png" alt="" /> */}
        </div>
        <div className="slider-2"></div>
        <div className="slider-3"></div>
      </div>
      <img className='slider-img1' src="https://www.starbucks.in/media/swiperbtnleft-ELPH6PUN.svg" alt="" />
      <img className='slider-img2' src="https://www.starbucks.in/media/swiperbtnright-ZPA5GCMU.svg" alt="" />
    </div>
  )
}

export default Slider
