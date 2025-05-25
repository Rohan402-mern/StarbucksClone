import React from 'react'
import './LoginIntro.css'
import { useSelector,useDispatch } from 'react-redux'
import { ModelChange } from '../../redux/counter/counterSlice';
const LoginIntro = () => {

    const dispatch = useDispatch();
  return (
    <div className='loginintro'>
        <div className='loginintro-skip'>
        <button  onClick={()=>dispatch(ModelChange(false))}>SKIP</button>
        </div>
        <h1>Login</h1>
        <form action="">
            <label htmlFor="">USERNAME</label>
            <input type="text" placeholder='Enter Email ID or Mobile Number *' />
            <hr />
            <label htmlFor="">PASSWORD</label>
            <input type="text" placeholder='Enter Password *' />
            <hr />
            <p>Don't have an account? <a href="SignUp">Signup</a></p>
            <button>Login</button>
            <p>Facing trouble logging in? <a href="Get help">Get help</a></p>
            <p><img src="https://www.starbucks.in/assets/images/whatsapp-logo.png" alt="" />Already registered via WhatsApp? <a href="SignUp">Continue Here</a></p>
        </form>
    </div>
  )
}

export default LoginIntro
