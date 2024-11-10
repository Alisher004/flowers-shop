import React from 'react'
import "./Cart.scss"
import play from "../../assets/image/play.png"
import { useSelector } from 'react-redux'

function CartCom() {
  const {cartItem} = useSelector((state) => state.carts)
  return (
    <div className='main container'>
        <div className='main-top'>  
            <p>Product</p>
            <p> Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </div>
        <div className='basket-product'>
          {
            cartItem.map((item) => (
             <div className='product'>
              <div className='addp'>
              <img src={item.iamgeUrl} alt="" />
            <p>{item.title}</p>  
              </div>
              
            <p>$550</p>
            <input type="number" placeholder='0'/>
            <p>$1100</p>   
        </div> 
            ))
          }
        </div>
        
        <div className='b1'>
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
        <div className='main-bottom'>
          <div className='ali'>
            <input type="text" placeholder='Coupon Code'/>
            <button>Apply Coupon</button>
          </div>
          <div className='b-right'>
            <h3>Cart Total</h3>
            <div className='sub'>
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <hr />
            <div className='ship'>
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='total'>
              <p>Total:</p>
              <p>$1750</p>
            </div>
            <button>Procees to checkout</button>
          </div>
        </div>
    </div>
  )
}

export default CartCom
