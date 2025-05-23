import React from 'react'
import Banner from '../Components/Banner/Banner'
import Slider from '../Components/Slider/Slider' 
import Scroller from '../Components/Scroller/Scroller'
import HandCrafted from '../Components/HandCrafted/HandCrafted'
import Barista from '../Components/Barista/Barista'
import WorldCoffee from '../Components/WorldCoffee/WorldCoffee'
const Dashboard = () => {
  return (
    <div>
     <Banner/>
     <Slider/>
     <Scroller/>
     <HandCrafted/>
     <Barista/>
     <section style={{width:'100vw',margin:'40px 0px',backgroundColor:'white'}}></section>
     <WorldCoffee/>
    </div>
  )
}

export default Dashboard
