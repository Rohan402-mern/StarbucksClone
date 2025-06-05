import React from 'react'
import './RegisterMain.css'
import InputReuse from '../ReusableComponents/InputReuse'
const RegisterMain = () => {
  return (
    <div className='registermain'>
      <h1>Login to Starbucks</h1>
      <hr />
      <div className="registermain-cont">
        <InputReuse label={"Email ID"} />
        <InputReuse label={"MOBILE NUMBER"}/>
        <InputReuse label={"CREATE PASSWORD"}/>
        <InputReuse label={"CONFIRM PASSWORD"}/>
      </div>
    </div>
  )
}

export default RegisterMain
