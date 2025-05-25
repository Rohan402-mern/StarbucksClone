import React from 'react'
import ReuseHead from '../Components/ReusableComponents/ReuseHead'
import ProfileIntro from '../Components/ProfileIntro/ProfileIntro'

const Profile = () => {
  return (
    <div>
      <ReuseHead title={<div>Profile &gt; Account</div>} route={"Account"} />
      <ProfileIntro/>
      
    </div>
  )
}

export default Profile
