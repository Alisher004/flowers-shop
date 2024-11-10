import React from 'react'
import "./Footer.scss"
import telegram from "../../assets/svg/telegram.svg"
import gvr from "../../assets/svg/cvrcode.svg"
import playm from "../../assets/svg/playmarket.svg"
import apple from "../../assets/svg/apple.svg"
import facebok from "../../assets/svg/facebok.svg"
import twiter from "../../assets/svg/twiter.svg"
import insta from "../../assets/svg/insta.svg"
import link from "../../assets/svg/link.svg"

function Footer() {
  return (
    <div>
    <div className='footer'>
      <div className='info'>
        <div className='info1'>
          <h3>Exclusive</h3>
          <h5>Subscribe</h5>
          <p>Get 10% off your first order</p>
        <div className='ali'>
          <input type="text" placeholder='Enter your email'/>
          <img src={telegram} alt="" />
        </div>
        </div>
        <div className='info2'>
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className='info3'>
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className='info4'>
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className='info5'>
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className='svgs'>
            <div className='cvrcode'>
              <img src={gvr} alt="" />
            </div>
            <div className='applay'>
              <img src={playm} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
          <div className='sotsety'>
            <img src={facebok} alt="" />
            <img src={twiter} alt="" />
            <img src={insta} alt="" />
            <img src={link} alt="" />
          </div>
        </div>
      </div>
      <div className='a1'>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
