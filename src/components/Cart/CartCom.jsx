import React from 'react'
import "./Cart.scss"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CartCom() {
  const { cartItem } = useSelector((state) => state.carts)
  return (
    <div className='main container'>

      <div className='basket-product'>
        {
          cartItem.map((item) => (
            <div className='product'>
              <div className='addp'>
                <img className='surot' src={item.imageUrl} alt="" />
                <p>{item.title}</p>
              </div>

              <p>${item.price}</p>
              <input type="number" placeholder='0' />
              <p>$1000</p>
            </div>
          ))
        }
      </div>

      <div className='b1'>
        <Link to={"/"}>
          <button>Return To Shop</button>
        </Link>
      </div>
      <div className='main-bottom'>
        <div className='ali'>
          <input type="text" placeholder='Coupon Code' />
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
