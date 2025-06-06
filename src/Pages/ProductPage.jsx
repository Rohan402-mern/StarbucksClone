import React from 'react'
import '../Components/Product/ProductPage.css'
import { useParams } from 'react-router-dom'
import all_product from '../Components/StarbucksProduct/all_product';
import ReuseHead from '../Components/ReusableComponents/ReuseHead';
import { Link } from 'react-router-dom';
import { barChange } from '../redux/counter/counterSlice';
import { useDispatch } from 'react-redux';
import Custom from '../Components/Product/Custom';
const ProductPage = () => {
    const dispatch = useDispatch();
    const {productName} = useParams();
    const product = all_product.Bestseller.find((item)=>item.title === productName);
    // console.log(product)
    if(!product) return <h1>Product not found</h1>
  return (
    <div>
        <ReuseHead title={<div><Link onClick={()=>dispatch(barChange("home"))} to={"/dashboard"} style={{textDecoration:'none',color:'inherit'}}>Home</Link> &gt; <Link onClick={()=>dispatch(barChange("order"))} to={"/ordering"} style={{textDecoration:'none',color:'inherit'}}>Order</Link> &gt; <Link onClick={()=>dispatch(barChange("order"))} to={"/ordering"} style={{textDecoration:'none',color:'inherit'}}>Bestseller</Link> &gt; {product.title}</div>} />
        <div className="productpage">
            <div className='productpage-img'>
                <img className='productpage-img-main' src={product.fullimgUrl}  alt={product.title} />
            <div className="productpage-cont">
                <div className='productpage-inner'>
                <img className='productpage-expand' src="https://www.starbucks.in/assets/icon/expand.png" alt="" />
                <div className='productpage-first'>
                <img src={product.typeUrl} alt="" />
                <span>{product.iteminfo}</span>
                </div>
                <h1>{product.title}</h1>
                <p>{product.fullSummary}</p>
                <div className='productpage-content'>
                {product.content.map((list)=>{
      return <li key={list.img1} className='popcard-s2-item'><img src={list.img1} alt="" />  <p>{list.name}</p></li>
     })}
     </div>
            </div>
            <div className="productpage-s2">
                <Custom title={"CUSTOMISE YOUR ORDER(Default)"} info={"TALL,Indian Espresso Roast (regular) - Default,"} />
                <div className="productpage-s3">
                <Custom title={"AMP UP YOUR ORDER WITH ADD-ONS"} info={"Vanilla Syrup - Default, With Whipped Topping"} />
            </div>
            </div>
            
            </div>
             
            </div>
        </div>
    </div>
  )
}

export default ProductPage