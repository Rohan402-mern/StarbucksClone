import './Slider.css'
import { useEffect,useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { indexChange } from '../../redux/counter/counterSlice' 
const Slider = () => {
 const slide = useSelector((state)=>state.counter.slide);
 const slideRef = useRef();
 const dispatch = useDispatch();
// console.log(slide)
 const handleClick=(direction)=>{
  let newIndex = slide +direction;
 if(newIndex>3)newIndex=3;
 if(newIndex<0) newIndex = 0;

  slideRef.current.style.transform = `translateX(-${newIndex*100}%)`
  dispatch(indexChange(newIndex))
 }


  return (
    <div className='slider'>
      <div className="slider-cont">
        <div ref={slideRef} className='slider-inner-cont'>

        <div className="slider-1">
          <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/image_7_e38baafb43.png" alt="" />
          <div className="slider-1-div">
            <p>You’re Invited Exclusively For</p>
            <h1>Cold Brew Week!</h1>
            <p>Experience 48 Hours of Craft in every cold brew from our summer lineup!</p>
            <div>
            <button>Know more</button>
            </div>
          </div>
        </div>
        <div className="slider-2">
           <img style={{width:'100px'}} src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ASSET_aad6872b43.png" alt="" />
          <div style={{color:'rgb(255,255,255)'}} className="slider-1-div">
            <p>Starbucks</p>
            <h1>Beverage Subscription</h1>
            <p>Starbucks Subscription is Back! Sip Your Favourites for Less. Tap for Details. T&C Apply.</p>
            <div>
            <button>Know more</button>
            </div>
          </div>
        </div>
        <div className="slider-3">
          <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/SUMMER_VOUCHER_png_05_bd3dce1159.png" alt="" />
          <div style={{color:'rgba(0, 0, 0, 0.87)',position:'relative',top:'-10px'}} className="slider-1-div">
            <p>All New</p>
            <h1>☀️Refreshing New Summer Specials</h1>
            <p style={{width:'615px'}}>Beat the heat with refreshing summer beverages and indulgent mango delights — crafted to keep you cool and craving more</p>
            <div>
            <button style={{padding:'15px 55px'}}>Explore the menu</button>
            </div>
          </div>
        </div>
        <div className="slider-4">
          <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Refreshers_dashboard_03_1_10aa41bbca.png" alt="" />
          <div style={{color:'rgba(0, 0, 0, 0.87)',gap:'24px',position:'relative',top:'-10px'}} className="slider-1-div">
            <p>All New</p>
            <h1>Starbucks Refreshers</h1>
            <p style={{width:'615px'}}>Beat the heat with your bestie, Refreshers now available in Lychee Raspberry and Kiwi Calamansi flavours.</p>
            <div>
            <button>Order Now</button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <img onClick={()=>handleClick(-1)} style={{opacity:slide === 0?'0.35':'1'}} className='slider-img1' src="https://www.starbucks.in/media/swiperbtnleft-ELPH6PUN.svg" alt="" />
      <img onClick={()=>handleClick(1)} style={{opacity:slide === 3?'0.35':'1'}} className='slider-img2' src="https://www.starbucks.in/media/swiperbtnright-ZPA5GCMU.svg" alt="" />
    </div>
  )
}

export default Slider



