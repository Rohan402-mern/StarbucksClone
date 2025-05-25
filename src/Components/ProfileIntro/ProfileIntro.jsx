import React from 'react'
import './ProfileIntro.css'
import { Link } from 'react-router-dom'
import PopUp from '../PopUp/Popup'
import { useSelector,useDispatch } from 'react-redux'
import { ModelChange } from '../../redux/counter/counterSlice'
import LoginIntro from '../Login/LoginIntro'
const ProfileIntro = () => {
  const showModel = useSelector((state)=>state.counter.showModel);
    const dispatch = useDispatch();
  return (
    <div className='profileintro'>
        <img className='profile-setting' src="https://www.starbucks.in/assets/icon/settings_icon.svg" alt="" />
     <div className='profile-main'>
        <div className='profile-inner'>
        <div className='profile-logo'>
        <div className='profile-cover'>
        <img src="https://www.starbucks.in/assets/images/profileDP.svg" alt="" />
        </div>
        </div>
        </div>
        <h1>Welcome to Starbucks</h1>
        <button onClick={()=>dispatch(ModelChange(true))}>Login or Sign Up</button>
     </div>
      <div className="profile-help">
        <div className='profile-help-main'>
            <Link style={{display:'flex', textDecoration:'none',width:'100%',justifyContent:'space-between',}} to={'/profile/help-center'} ><div className="profile-help-cont">
                <img src="https://www.starbucks.in/assets/icon/help_centre.svg" alt="" />
                <p>HELP CENTER</p>
            </div>
            <img src="https://www.starbucks.in/assets/icon/arrow_right.svg" alt="" />
            </Link></div>
            <hr />
        </div>
        <PopUp show={showModel} >
          <LoginIntro/>
        </PopUp>
    </div>
  )
}

export default ProfileIntro
