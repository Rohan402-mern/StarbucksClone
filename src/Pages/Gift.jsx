import React from 'react'
import ReuseHead from '../Components/ReusableComponents/ReuseHead'
import GiftIntro from '../Components/GiftIntro/GiftIntro'
import Created from '../Components/Created/Created'

const Gift = () => {
  
  return (
    <div>
      <ReuseHead title={<div>Home &gt; Gift Cards</div>} />
      <GiftIntro/>
      <Created/>
    </div>
  )
}

export default Gift
