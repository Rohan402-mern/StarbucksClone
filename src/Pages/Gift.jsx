import React from 'react'
import ReuseHead from '../Components/ReusableComponents/ReuseHead'
import GiftIntro from '../Components/GiftIntro/GiftIntro'
import ReuseGift from '../Components/ReusableComponents/ReuseGift'
import Created from '../Components/Created/Created'



const Gift = () => {
  return (
    <div>
      <ReuseHead route={"Gift Cards"} />
      <GiftIntro/>
      <Created/>
    </div>
  )
}

export default Gift
