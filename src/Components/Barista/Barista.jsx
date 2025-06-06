import React from 'react'
import './Barista.css'
import {Link} from 'react-router-dom'
import { barChange } from '../../redux/counter/counterSlice'
import { useDispatch,useSelector } from 'react-redux'
import { ModelChange } from '../../redux/counter/counterSlice'
import PopUp from '../PopUp/Popup'
import PopCard from '../PopUp/PopCard'
const Barista = () => {
   const showModel = useSelector((state)=>state.counter.showModel);
  //  console.log(showModel)
  const dispatch = useDispatch();
  return (
    <div className='barista'>
      <div className="barista-1">
        <h1>Barista Recommends</h1>
        <p onClick={()=>dispatch(barChange('order')) }><Link style={{color:'inherit',textDecoration:'none'}} to={'/ordering'} >View Menu</Link></p>
      </div>
      <div className="barista-2">
        <div className="barista-s1">
            <img onClick={()=>dispatch(ModelChange(true))} src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp" alt="" />
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
      {showModel &&(
        <PopUp show = {showModel} onClose={() => dispatch(ModelChange(false))}>
        <PopCard selectedProduct={{fullimgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100501.webp',content:[
        {img1:'https://starbucksstatic.cognizantorderserv.com/Icon/Dark/Soy.png',name:'SOY'},
        {img1:'https://starbucksstatic.cognizantorderserv.com/Icon/Dark/Milk.png',name:'MILK'},
        {img1:'https://starbucksstatic.cognizantorderserv.com/Icon/Dark/Wheat.png',name:'WHEAT'},
    ],price:'₹ 420.00',fullSummary:'Mocha sauce and Frappuccino® chips blended with with Frappuccino® roast coffee and milk and ice, then topped with whipped vanilla topping and mocha drizzle to bring you endless java joy.',typeUrl:'https://www.starbucks.in/assets/icon/veg.svg',title:'Java Chip Frappuccino',info:'TALL(345 ml) .392 kcal'}} />
      </PopUp>
      )}
    </div>
  )
}

export default Barista
