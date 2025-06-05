import React from 'react'
import ReuseHead from '../Components/ReusableComponents/ReuseHead'
import RegisterIntro from '../Components/Registration/RegisterIntro'

const Registration = () => {
  return (
    <div>
        <ReuseHead title={<div>Home &gt; Create An Account</div>} />
        <RegisterIntro/>
    </div>
  )
}

export default Registration
