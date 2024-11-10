import React from 'react'
import "./Product.scss"
import play from "../../assets/image/play.png"
import cerdse  from "../../assets/svg/cerdse.svg"
import glaza from "../../assets/svg/glaza.svg"
import Star from "../../assets/svg/Star.jsx"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addWish } from '../../redux/wish/wishSlice.js'
import { addCart } from '../../redux/cart/cartSlice.js'

function Product({data}) {
const dispatch = useDispatch()
  return (
    <div>
      <main className='mains '>
        <div className='main-for'>
        <div className='main-center'>
          <div className='mm'>
        <img src={data.imageUrl} alt="" />

          </div>
          <div className='pp'>-{data.discount}%</div>
          <div className='pw'>
            <img onClick={() => dispatch(addWish(data))} src={cerdse} alt="" />
            <img src={glaza} alt="" />
          </div>
          <button onClick={() => dispatch(addCart(data))} 
          className='product-btn'>Add to cart</button>
          <div className='ww'>

        <h6>{data.title}</h6>
          </div>

        <div className='main-top1'>
          <p>$120</p>
          <h4>${data.price}</h4>
        </div> 
        <div className='main-left'>
          {
            [1,2,3,4,4].map((item) => (
             <Star key={item} fill={item <= data.star ? "orange" : "gray"}/> 
            ))
          }
          
        <p>({data.viewsCount})</p>
        </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Product
