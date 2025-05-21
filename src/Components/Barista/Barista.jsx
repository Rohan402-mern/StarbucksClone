import React from 'react'
import './Barista.css'
const Barista = () => {
  return (
    <div className='barista'>
      <div className="barista-1">
        <h1>Barista Recommends</h1>
        <p>View Menu</p>
      </div>
      <div className="barista-2">
        <div className="barista-s1">
            <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp" alt="" />
            <div className="barista-inner">
                <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                <h1>Java Chip Frappuccino</h1>
                <p>TALL(345 ml) .392 kcal</p>
            </div>
        </div>
        <div className="barista-s2">
            <p>₹ 420.00</p>
            <button>Add Item</button>
        </div>
      </div>
    </div>
  )
}

export default Barista
