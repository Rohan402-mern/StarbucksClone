import React from 'react'
import './SmallNav.css'
import { suborderChange } from '../../redux/counter/counterSlice'
import { useSelector,useDispatch } from 'react-redux'
const SmallNav = ({items}) => {
    const suborderSwitch = useSelector((state)=>state.counter.suborderSwitch);
    const dispatch = useDispatch();
    console.log(suborderSwitch)
  return (
    <div className='smallnav-main'>
    <div className='smallnav'>
        <img src="https://www.starbucks.in/assets/icon/left-icon.svg" alt="" />
      <ul>
        {items.map((item)=>{
            return <li onClick={()=>dispatch(suborderChange(item))} style={{color:suborderSwitch === `${item}`?'rgb(39,117,74)':'',fontWeight:suborderSwitch === `${item}`?'700':''} }  key={item} 
            className={suborderSwitch === `${item}`?'nav-item3 ':'nav-item3 '}
            >{item}</li>
        })}
        <img src="https://www.starbucks.in/assets/icon/right-icon.svg" alt="" />
      </ul>
    </div>
    <hr />
    </div>
  )
}

export default SmallNav
