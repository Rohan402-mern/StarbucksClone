import React from 'react'
import './ReuseNav.css'
import { orderChange,suborderChange } from '../../redux/counter/counterSlice'
import { useSelector,useDispatch } from 'react-redux'
const ReuseNav = ({items}) => {
   const orderSwitch = useSelector((state)=>state.counter.orderSwitch);
   const suborderSwitch = useSelector((state)=>state.counter.suborderSwitch);
    const dispatch = useDispatch();
    const subItems ={Drinks:'Espresso',Food:'Sandwiches & Wraps'}
    // console.log(orderSwitch)
    console.log(suborderSwitch)
  return (

    <div className='reusenav'>
      <div className="reusenav-cont">
        <ul>
         { items.map((item)=>{
            return <li key={item}><span  onClick={()=>{dispatch(orderChange(item)); dispatch(suborderChange(subItems[item]))}} style={{color:orderSwitch === `${item}`?'rgb(39,117,74)':'',fontWeight:orderSwitch === `${item}`?'700':''} } className={orderSwitch === `${item}`?'nav-item2 active2':'nav-item2 '}>{item}</span> <span className='slash2'>|</span></li>
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default ReuseNav
