import React from 'react'
import './GiftIntro.css'
import { giftChange } from '../../redux/counter/counterSlice'
import { useSelector,useDispatch } from 'react-redux'

const GiftIntro = () => {
  const giftSwitch = useSelector((state)=>state.counter.giftSwitch);
  const dispatch = useDispatch();
  // console.log(giftSwitch)
  return (
    <div className='giftintro'>
      <div className="giftintro-s1"></div>
      <div className='giftintro-s2'>
        <ul>
            <li><span onClick={()=>dispatch(giftChange('featured'))} style={{color:giftSwitch === 'featured'?'rgb(39,117,74)':'',fontWeight:giftSwitch === 'featured'?'700':''} } className={giftSwitch === 'featured'?'nav-item active1':'nav-item '}>FEATURED</span><span className="slash ">|</span></li>
            <li><span onClick={()=>dispatch(giftChange('Anytime'))} style={{color:giftSwitch === 'Anytime'?'rgb(39,117,74)':'',fontWeight:giftSwitch === 'Anytime'?'700':''}}  className={giftSwitch === 'Anytime'?'nav-item active1':'nav-item '}>ANYTIME</span><span className="slash">|</span></li>
            <li><span onClick={()=>dispatch(giftChange('cong'))} style={{color:giftSwitch === 'cong'?'rgb(39,117,74)':'',fontWeight:giftSwitch === 'cong'?'700':''}}  className={giftSwitch === 'cong'?'nav-item active1':'nav-item '}>CONGRATULATIONS</span><span className="slash">|</span></li>
            <li><span onClick={()=>dispatch(giftChange('thanks'))} style={{color:giftSwitch === 'thanks'?'rgb(39,117,74)':'',fontWeight:giftSwitch === 'thanks'?'700':''}}  className={giftSwitch === 'thanks'?'nav-item active1':'nav-item '}>THANK YOU</span></li>
        </ul>
      </div>
    </div>
  )
}

export default GiftIntro
