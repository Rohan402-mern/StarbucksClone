import React from 'react'
import Banner from '../Components/Banner/Banner'
import Slider from '../Components/Slider/Slider' 
import Scroller from '../Components/Scroller/Scroller'
import HandCrafted from '../Components/HandCrafted/HandCrafted'
import Barista from '../Components/Barista/Barista'
import WorldCoffee from '../Components/WorldCoffee/WorldCoffee'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const Dashboard = () => {
  const showModel = useSelector((state)=>state.counter.showModel)
   useEffect(() => {
    if (showModel) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showModel])
  return (
    <div style={showModel === true? {overflow:'hidden'}:{}}>
     <Banner/>
     <Slider/>
     <Scroller/>
     <HandCrafted/>
     <Barista title={'Barista Recommends'} view={'View Menu'} />
     <section style={{width:'100vw',margin:'40px 0px',backgroundColor:'white'}}></section>
     <WorldCoffee/>
    </div>
  )
}

export default Dashboard
