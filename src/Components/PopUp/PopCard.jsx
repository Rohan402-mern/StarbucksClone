import React from 'react'
import './PopCard.css'
const PopCard = ({selectedProduct,children}) => {
    if (!selectedProduct) return null;
  return (
    <div className='popcard'>
      <div className='popcard-img'>
        <img src={selectedProduct.fullimgUrl} alt={selectedProduct.title} />
    </div>
    <div className='popcard-s2'>
     <img src={selectedProduct.typeUrl} alt="" />
     <h1>{selectedProduct.title}</h1>
     <p className='popcard-s2-info'>{selectedProduct.info}</p>
     <ul className='popcard-s2-content'>
     {selectedProduct.content.map((list)=>{
      return <li key={list.img1} className='popcard-s2-item'><img src={list.img1} alt="" />  <p>{list.name}</p></li>
     })}
     </ul>
     <p className='popcard-s2-summary' >{selectedProduct.fullSummary}</p>
     <p className='popcard-s2-price'>{selectedProduct.price}</p>
    </div>
    {children}
    </div>
  )
}

export default PopCard
