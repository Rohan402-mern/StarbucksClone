import React from 'react'
import './CartIntro.css'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DecrementCart, IncrementCart, ModelChange, OperatorChange } from '../../redux/counter/counterSlice'
import PopUp from '../PopUp/PopUp'
import PopCard from '../PopUp/PopCard'
const CartIntro = () => {
  const [popupItem, setPopupItem] = React.useState(null);

  const cart = useSelector((state)=>state.counter.cart)
  const showModel = useSelector((state)=> state.counter.showModel)
  const operator = useSelector((state)=> state.counter.operator)
  const dispatch = useDispatch();
  return (
    <div className='cartintro'>
      <div className="cartintro-1">
        <div className="cartintro-1-inner">
          <img src="https://www.starbucks.in/assets/icon/store.svg" alt="" />
          <h1>DINE-IN AT</h1>
        </div>
        <p>Platina Gachibowli</p>
      </div>
      <div className="cartintro-2">
        {cart.map((item)=>{
        return(
          <div className='cartintro-cont' key={item.id}>
          <div className='cartintro-item' >
            <div className="cartintro-item-1">
              <div className="cartintro-item1-s1">
                <div className='cartintro-items1-1'>
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className='cartintro-items1-2'>
                  <img src={item.typeUrl} alt="" />
                  <h1>{item.title}</h1>
                  <p>BLENDED TALL,Indian Espresso Roast (regular) - Def.. View More</p>
                </div>
              </div>
              <div className="cartintro-item1-s2">
                <svg  onClick={()=>{if(item.quantity>1){dispatch(OperatorChange('decrement'));dispatch(DecrementCart({id:item.id}))}else{setPopupItem(item);dispatch(ModelChange(true));}}} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" 
                fill="rgb(1, 129, 77)"><path d="M252-454v-52h456v52H252Z"/></svg>
                <p>{item.quantity}</p>
                <svg onClick={()=>{dispatch(OperatorChange('increment'));setPopupItem(item);dispatch(ModelChange(true)); }} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" 
                fill="rgb(1, 129, 77)"><path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z"/></svg>
              </div>
            </div>
            <div className="cartintro-item-2">
              <p>₹ {item.quantity*item.price}</p>
              <span><Link style={{color:'inherit'}} to={`/ordering/${item.title}`}>Customize</Link></span>
            </div>
            
            </div>
            <hr />
          </div>
        )
      })}
      </div>
      <div className='cartintro-addmore'>
        <p><Link style={{color:'inherit'}}>+ Add More Items</Link></p>
      </div>
      
      {showModel && popupItem && (
  <PopUp show={showModel} onClose={() => {
    dispatch(ModelChange(false));
    setPopupItem(null);
  }}>
    {popupItem.quantity <= 1 && operator =='decrement' ? (
      <div className='cartintro-remove'>
        <div className='cartintro-remove-inner'>
          <h1>Are you sure you want to delete this item?</h1>
          <div>
            <button onClick={() => {
              dispatch(ModelChange(false));
              setPopupItem(null);
            }}>No</button>
            <button
              className='cartintro-yes'
              onClick={() => {
                dispatch(DecrementCart({ id: popupItem.id }));
                dispatch(ModelChange(false));
                setPopupItem(null);
              }}
            >Yes</button>
          </div>
        </div>
      </div>
    ) : (
      <PopCard selectedProduct={popupItem} >
        {<div>
        <button><Link to={`/ordering/${popupItem.title}`} style={{color:'inherit',textDecoration:'none'}} >I'll choose again</Link></button>
        <button onClick={()=>{dispatch(IncrementCart({id:popupItem.id}));dispatch(ModelChange(true));}}>Repeat last</button>
        
        </div>
        }
      </PopCard>
    )}
  </PopUp>
)}

    </div>
  )
}

export default CartIntro
