import React from 'react'
import './Popup.css'
const PopUp = ({show,onClose,children}) => {
    if(!show) return null;

  return (
    <div className='popup' onClick={onClose}>
      <div className="popup-cont">
        {children}
      </div>
      
    </div>
  )
}

export default PopUp
