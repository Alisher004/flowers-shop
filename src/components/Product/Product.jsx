import React from 'react'
import "./Product.scss"
import Star from "../../assets/svg/Star.jsx"
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/cart/cartSlice.js'

function Product({ data }) {

  const dispatch = useDispatch()
  
  return (
    <div>
      <main className='mains '>
        <div className='main-for'> 
          <div className='main-center'>
            <div className='mm'>
              <img src={data.imageUrl} alt="" />

            </div>
            <div className='pw'>
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
                [1, 2, 3, 4, 4].map((item) => (
                  <Star key={item} fill={item <= data.star ? "orange" : "gray"} />
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
