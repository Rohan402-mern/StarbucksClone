import React from 'react'
import { useState } from 'react';
import './CartText.css'
const CartText = () => {
   const [selectedMug, setSelectedMug] = useState('ceramic'); // default selected

  const handleChange = (e) => {
    setSelectedMug(e.target.value);
  };
  return (
    <div className='carttext'>
      <div className='carttext-1'>
        <img src="https://www.starbucks.in/assets/icon/list.svg" alt="" /> 
        <h1>ANY OTHER REQUEST?</h1>
      </div>
      <textarea name="" rows={11} placeholder='Have something specific in mind? Write it down and we&#39;ll let our baristas know' id="">

      </textarea>
      <div className="carttext-2">
        <h1>SELECT SERVEWARE</h1>
        <hr />
        <div className='carttext-card'>
        <div className="carttext-card1">
            <input type="radio" name="mugType" value="ceramic" checked={selectedMug === 'ceramic'} onChange={handleChange} />
            <div>
                <img src="https://uattsbwsstore.blob.core.windows.net/wsstore/serveWare/1681292074838_Ceramic_Coffee_Mug.png" alt="" />
                <p>Ceramic Mug</p>
            </div>
        </div>
        <div className="carttext-card1">
            <input type="radio"  name="mugType" value="paper" checked={selectedMug === 'paper'} onChange={handleChange} />
            
            <div>
                <img src="https://uattsbwsstore.blob.core.windows.net/wsstore/serveWare/1681292038361_Paper_Coffee_Mug.png" alt="" />
                <p>Paper Mug</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CartText
