import React from 'react'
import './Navbar.css'
import { useDispatch,useSelector } from 'react-redux'
import { isSearch, } from '../../redux/counter/counterSlice'
import { barChange } from '../../redux/counter/counterSlice'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const Search = useSelector((state)=>state.counter.search);
    const active = useSelector((state)=>state.counter.active);
    const dispatch = useDispatch();
  return (
    <nav  className='navbar'>
        <div className="navbar-s1">
            <img src="https://www.starbucks.in/assets/icon/logo.png" alt="" />
            <ul>
                <Link style={{textDecoration:'none',color:'black'}} to={'/dashboard'}><li style={active === "home"?{color: 'rgb(0,117,74)',fontWeight:'600'}:{}} onClick={()=>dispatch(barChange('home'))} className={active === 'home' ? 'active' : ''}>Home</li></Link>
                <Link style={{textDecoration:'none',color:'black'}} to={'/giftcards'}><li style={active === "gift"?{color: 'rgb(0,117,74)',fontWeight:'600'}:{}} onClick={()=>dispatch(barChange('gift'))} className={active === 'gift' ? 'active' : ''}>Gift</li></Link>
                <Link  style={{textDecoration:'none',color:'black'}} to={'/ordering'}><li style={active === "order"?{color: 'rgb(0,117,74)',fontWeight:'600'}:{}} onClick={()=>dispatch(barChange('order'))} className={active === 'order' ? 'active' : ''}>Order</li></Link>
                <li style={active === "pay"?{color: 'rgb(0,117,74)',fontWeight:'600'}:{}} onClick={()=>dispatch(barChange('pay'))} className={active === 'pay' ? 'active' : ''}>Pay</li>
                <li style={active === "store"?{color: 'rgb(0,117,74)',fontWeight:'600'}:{}} onClick={()=>dispatch(barChange('store'))} className={active === 'store' ? 'active' : ''}>Store</li>
            </ul>
        </div>
        <div className="navbar-s2">
            <div onClick={()=>dispatch(isSearch())} style={Search?{border:'1px solid black'}:{border:'none'}} className="navbar-input">
                <img style={{cursor:'pointer'}} src="https://www.starbucks.in/assets/icon/search.svg" alt="" />
                <input type="text" name="" id="" placeholder='Looking for something specific?' />
            </div>
            <img src="https://www.starbucks.in/assets/icon/account_thin.svg" alt="" style={{width:'32px',cursor:'pointer'}} />
        </div>
    </nav>
  )
}

export default Navbar
