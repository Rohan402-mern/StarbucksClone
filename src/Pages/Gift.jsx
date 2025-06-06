import React from 'react'
import ReuseHead from '../Components/ReusableComponents/ReuseHead'
import GiftIntro from '../Components/GiftIntro/GiftIntro'
import Created from '../Components/Created/Created'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { barChange } from '../redux/counter/counterSlice'
const Gift = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ReuseHead title={<div><Link onClick={()=>dispatch(barChange("home"))} to={"/dashboard"} style={{textDecoration:'none',color:'inherit'}}>Home</Link> &gt; Gift Cards</div>} />
      <GiftIntro/>
      <Created/>
    </div>
  )
}

export default Gift
