import React from 'react'
import '../Components/Product/ProductPage.css'
import { useParams } from 'react-router-dom'
import all_product from '../Components/StarbucksProduct/all_product';
import ReuseHead from '../Components/ReusableComponents/ReuseHead';
import { Link } from 'react-router-dom';
import { barChange } from '../redux/counter/counterSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CustomHead from '../Components/Product/CustomHead';
import ProductSize from '../Components/Product/ProductSize';
const ProductPage = () => {
    const yes = useSelector((state)=>state.counter.yes)
    const dispatch = useDispatch();
    const {productName} = useParams();
    const product = all_product.Bestseller.find((item)=>item.title === productName);
    // console.log(product)
    if(!product) return <h1>Product not found</h1>
  return (
    <div>
        <ReuseHead title={<div><Link onClick={()=>dispatch(barChange("home"))} to={"/dashboard"} style={{textDecoration:'none',color:'inherit'}}>Home</Link> &gt; <Link onClick={()=>dispatch(barChange("order"))} to={"/ordering"} style={{textDecoration:'none',color:'inherit'}}>Order</Link> &gt; <Link onClick={()=>dispatch(barChange("order"))} to={"/ordering"} style={{textDecoration:'none',color:'inherit'}}>Bestseller</Link> &gt; {product.title}</div>} />
        <div className="productpage"> 
            <div className="productpage-img">
                <img src={product.fullimgUrl} alt="" />
            </div>
            <div className="productpage-customize">
                {yes === false? 
                <div className='productpage-info' style={{display:yes === true?'none':'block'}} >
                 <img className='productpage-expand' src="https://www.starbucks.in/assets/icon/expand.png" alt="" />
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
                    <ProductSize/>
                <div className="productpage-topping">
                    b
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductPage