import React from 'react'
import './InputReuse.css'
const InputReuse = ({label,type}) => {
  return (
    <div className='inputreuse'>
      <label >{label}</label>
      <input type={type} />
    </div>
  )
}

export default InputReuse
