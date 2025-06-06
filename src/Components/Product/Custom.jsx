import React from 'react'
import './Custom.css'
import CustomHead from './CustomHead'
import GreenBtn from './GreenBtn'
const Custom = ({title,info}) => {
  return (
    <div>
      <CustomHead title={title} info={info} />
      <GreenBtn title={"GRANDE"} />
    </div>
  )
}

export default Custom
