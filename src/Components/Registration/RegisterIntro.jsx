import React from 'react'
import './RegisterIntro.css'
import Stage from '../ReusableComponents/Stage'
import RegisterMain from './RegisterMain'

const RegisterIntro = () => {
  return (
    <div className='registerintro'>
      <div className="registerintro-main">
      </div>
      <div className="registerintro-cont">
        <Stage/>
        <RegisterMain/>
      
      </div>
    </div>
  )
}

export default RegisterIntro
