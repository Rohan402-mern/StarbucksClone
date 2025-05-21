import React from 'react'
import './WorldCoffee.css'
const WorldCoffee = () => {
  return (
    <div className='worldcoffee'>
      <div className='worldcoffee-1'>
      <h1>Learn more about the world of coffee!</h1>
      <p>Discover more</p>
      </div>
      <div className="worldcoffee-cont">
        <div className="worldcoffee-wrapper">
         <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg" alt="" />
      <div className="worldcoffee-cont-1">
        <button className='first-btn'>Coffee Culture</button>
        <h1>Art & Science Of Coffee Brewing</h1>
        <p>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
        <button className='sec-btn'>Learn More</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default WorldCoffee