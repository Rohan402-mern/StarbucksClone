import React from 'react'
import '../Components/Product/ProductPage.css'
import { useParams } from 'react-router-dom'
import all_product from '../Components/StarbucksProduct/all_product';
import ReuseHead from '../Components/ReusableComponents/ReuseHead';
import { Link } from 'react-router-dom';
import { barChange } from '../redux/counter/counterSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useRef,useEffect } from 'react';
import ProductSize from '../Components/Product/ProductSize';
import ProductTopping from '../Components/Product/ProductTopping';
import ProductLine from '../Components/Product/ProductLine';
import ProductAdd from '../Components/Product/ProductAdd';
import PopUp from '../Components/PopUp/PopUp'
import { ModelChange } from '../redux/counter/counterSlice';
const ProductPage = () => {
    const showModel = useSelector((state)=> state.counter.showModel)
    const yes = useSelector((state)=>state.counter.yes)
    const dispatch = useDispatch();
    const {productName} = useParams();
    const product = all_product.Bestseller.find((item)=>item.title === productName);
    // console.log(product)
    if(!product) return <h1>Product not found</h1>
    const refProductPage = useRef()
    useEffect(() => {
      if(refProductPage.current){
        refProductPage.current.style.transition = 'none'
        refProductPage.current.style.opacity = 0

        void refProductPage.current.offsetWidth
              refProductPage.current.style.transition = 'opacity 0.3s ease'

        setTimeout(() => {
        if (refProductPage.current) {
          refProductPage.current.style.opacity = '1'
        }
      }, 10)
      }
    }, [productName])
    
  return (
    <div ref={refProductPage} >
        <ReuseHead title={<div><Link onClick={()=>dispatch(barChange("home"))} to={"/dashboard"} style={{textDecoration:'none',color:'inherit'}}>Home</Link> &gt; <Link onClick={()=>dispatch(barChange("order"))} to={"/ordering"} style={{textDecoration:'none',color:'inherit'}}>Order</Link> &gt; <Link onClick={()=>dispatch(barChange("order"))} to={"/ordering"} style={{textDecoration:'none',color:'inherit'}}>Bestseller</Link> &gt; {product.title}</div>} />
        <div className="productpage"> 
            <div className="productpage-img">
                <img src={product.fullimgUrl} alt="" />
            </div>
            <div className="productpage-customize">
                {yes === ''? 
                 <div className='productpage-info' /* style={{display:yes === ('size' || 'topping') ?'none':'block'}*/ >
                 <img className='productpage-expand' onClick={()=>dispatch(ModelChange(true))} src="https://www.starbucks.in/assets/icon/expand.png" alt="" />
                <div>
                <div className='productpage-start'>
                    <img src={product.typeUrl} alt="" />
                    <span>{product.iteminfo}</span>
                </div>
                <h1>{product.title}</h1>
                <p className='productpage-summary'>{product.fullSummary}</p>
                <ul className="productpage-content">
                    {product.content.map((list)=>{
                        return <li key={list.name}  ><img src={list.img1} alt="" />  <p>{list.name}</p></li>
                    })}
                </ul>
                </div>
                </div>
                :<div className='productpage-else'>{product.title}</div>}
                    <ProductSize product={product} />
                    <ProductTopping product={product} />
                    <ProductLine product={product} />
                    <ProductAdd/>
            </div>
        </div>
        <PopUp show={showModel} onClose={()=>dispatch(ModelChange(false))}>
            {<div ><img style={{width:'585px',height:'495px',objectFit:'cover',objectPosition:'bottom',borderRadius:'15px'}} src={product.fullimgUrl} alt="" />
            <img src="https://www.starbucks.in/assets/icon/clear-white.svg" style={{cursor:'pointer',position:'absolute',width:'29px',top:'28px',right:'17px'}} alt="" />
            </div>}
        </PopUp>
    </div>
  )
}

export default ProductPage
