import React from 'react';
import './LoginIntro.css';
import { useSelector, useDispatch } from 'react-redux';
import { ModelChange, barChange, emailChange, passChange } from '../../redux/counter/counterSlice';
import { Link, useNavigate } from 'react-router-dom';

const LoginIntro = () => {
  const dispatch = useDispatch();
  const emaildata = useSelector((state) => state.counter.emaildata);
  const passdata = useSelector((state) => state.counter.passdata);
  const navigate = useNavigate();
let checkpass = false;
if(passdata.length>=8 && emaildata != ""){
checkpass = true;
}

  return (
    <div className='loginintro'>
      <div className='loginintro-skip'>
        <button onClick={() => {
          dispatch(ModelChange(false));
          dispatch(barChange("home"));
        }}>
          <Link to={"/dashboard"} style={{ color: 'inherit', textDecoration: 'none' }}>SKIP</Link>
        </button>
      </div>
      <h1>Login</h1>
      <form onSubmit={(e)=>e.preventDefault()} className='logininfo-form'>
        <div className='label-div'>
          <label>USERNAME</label>
          <input
            type="email"
            value={emaildata}
            onChange={(e) => dispatch(emailChange(e.target.value))}
            placeholder='Enter Email ID or Mobile Number *'
          />
          <hr />
          <p style={{ height: '19px', marginTop: '-1px', }}>
            <span className='login-hidden' style={{ height: emaildata === "" ? "19px" : '0px' }}>
              {emaildata === "" ? "Please enter value" : ''}
            </span>
          </p>
        </div>

        <div className='label-div'>
          <label>PASSWORD</label>
          <input
            type="password"
            value={passdata}
            onChange={(e) => dispatch(passChange(e.target.value))}
            placeholder='Enter your password *'
          />
          <hr />
          <p style={{ height: '19px', marginTop: '-1px' }}>
            <span className='login-hidden' style={{ height: passdata === "" ? "19px" : '0px' }}>
              {passdata === "" ? "Please enter value" : ''}
            </span>
          </p>
        </div>

        <div style={{width:'100%'}}>
          <p style={{ marginTop: '0px', }}>
          Don't have an account?&nbsp; <Link className='loginintro-signup' to="/signup">SignUp</Link>
        </p>
        </div>
        <button className={`${checkpass ? 'btnhoverednow' : 'btn-disbled'}`} type='submit'>Login</button>
        <p style={{ marginTop: '20px' }}>
          Facing trouble logging in?&nbsp; <Link className='loginintro-signup' to="/help">Get Help</Link>
        </p>
        <p style={{ marginTop: '14px' }}>
          <img src="https://www.starbucks.in/assets/images/whatsapp-logo.png" alt="WhatsApp" />
          Already registered via WhatsApp?&nbsp; <Link className='loginintro-signup' to="/whatsapp-login">Continue Here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginIntro;
