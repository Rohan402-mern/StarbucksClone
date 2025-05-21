import React from 'react'
import './HandCrafted.css'
import Curations from '../ReusableComponents/Curations'
const HandCrafted = () => {
  return (
    <div className='handcrafted'>
        <h1>Handcrafted Curations</h1>
        <div className='handcraft-cont'>
            <Curations imageUrl={"https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/Bestseller.webp"} name={"Bestseller"}/>
            <Curations  imageUrl={"https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/Drinks.webp"} name={"Drinks"}/>
            <Curations  imageUrl={"https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/Food.webp"} name={"Food"}/>
            <Curations  imageUrl={"https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/Merchandise.webp"} name={"Merchandise"}/>
            <Curations  imageUrl={"https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/CoffeeAtHome.webp"} name={"Coffee At Home"}/>
            <Curations  imageUrl={"https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/ReadyToEat.webp"} name={"Ready to Eat"}/>
        </div>
    </div>
  )
}

export default HandCrafted
