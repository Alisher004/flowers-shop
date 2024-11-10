import React from 'react'
import "./Header.scss"
import poisk from "../../assets/svg/poisk.svg"
import cart from "../../assets/svg/cart.svg"
import like from "../../assets/svg/like.svg"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import acount from "../../assets/svg/acount.svg"

function Header() {
  const {t,i18n} = useTranslation()
 const {items} = useSelector((state) => state.wishlist)
 const {cartItem} = useSelector ((state) => state.carts)
  const handleChange = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng)
  }
  return (
    <div>
      <div className="top-header">
        <div className='container flex'>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! ShopNow</p>
          <select onChange={handleChange}>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <div className='header container'>
        <div className='header-left'>
          <h1>{t("logo")}</h1>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </ul>
        </div>
        <div className='header-right'>
          <div className='search'>
            <input type="text" placeholder='What are you looking for?'/>
            <img src={poisk} alt="" />
          </div>
          <div className='icons'>
            <Link to={`/listcom`}>
            <div className='icon'>
            <img src={like} alt="" />
            <div className='count'>{items.length}</div>
            </div>
            </Link>

            <Link to={`/cartcom`}>
            <div className='icon'>
            <img src={cart} alt="" />
            <div className='count'>{cartItem.length}</div>
            </div>
            </Link>

            <Link to={`/acountcom`}>
            <div className='q1'>
           <img src={acount} alt="" />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
