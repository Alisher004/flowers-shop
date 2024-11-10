import React from 'react'
import "./List.scss"
import cartt from "../../assets/svg/cartt.svg"
import corzina from "../../assets/svg/corzina.svg"
import play from "../../assets/image/play.png"
import zvezda from "../../assets/svg/zvezda.svg"
import glaza from "../../assets/svg/glaza.svg"
import nout from "../../assets/image/nout.png"
import { useSelector } from 'react-redux'

function ListCom() {
  const {items} = useSelector((state) => state.wishlist)
  return (
    <div>
      <main className='main container'>
        <div className='main-left'>
          <p>Wishlist ({items.length})</p>
          <button>Move All To Bag</button>
        </div>
        <div className='main-for'>
          {
            items.map((x) => (
            <div className='main-center'>
          <div className='mm'>
        <img src={x.imageUrl} alt="" />

          </div>
          <div className='pp'>-{x.discount}%</div>
          <div className='pw'>
            <img src={corzina} alt="" />
          </div> <br />

          <button className='buttom-cart'>
            <img src={cartt} alt="" />
            <p>add to cart</p>
            </button>
          <div className='ww'>

        <h6>{x.title}</h6>
          </div>

        <div className='main-top'>
          <p>$960</p>
          <h4>${x.price}</h4>
        </div> 
  
        </div>  
            ))
          }
        
        </div>
        <div className='just'>
        <div className='just1'>
          <div className='just-w'></div>
          <p>Just For You</p>
        </div>
        <button>See All</button>

        {/* </div> */}
        </div>
        <div className='main-for'>
        <div className='main-center'>
          <div className='mm'>
        <img src={nout} alt="" />

          </div>
          <div className='pp'>-40%</div>
          <div className='pw'>
            <img src={glaza} alt="" />
          </div> <br />

          <button className='buttom-cart'>
            <img src={cartt} alt="" />
            <p>add to cart</p>
            </button>
          <div className='ww'>

        <h6>ASUS FHD Gaming Laptop</h6>
          </div>

        <div className='top'>
          <p>$960</p>
          <h4>$1160</h4>
        </div> 
        <div className='main-left2'>
          <img src={zvezda} alt="" />
          <p>(88)</p>
        </div>
  
        </div>
        <div className='main-center'>
          <div className='mm'>
        <img src={play} alt="" />

          </div>
          <div className='pp2'>NEW</div>
          <div className='pw'>
            
            <img src={glaza} alt="" />
          </div>
          <button className='buttom-cart'>
            <img src={cartt} alt="" />
            <p>add to cart</p>
            </button> <br />
          <div className='ww'>

        <h6>HAVIT HV-G92 Gamepad</h6>
          </div>

        <div className='top'>
          <p>$120</p>
          <h4>$160</h4>
        </div> 
        <div className='main-left2'>
          <img src={zvezda} alt="" />
          <p>(88)</p>
        </div>
        </div>
        </div>
      </main>
      
    </div>
  )
}

export default ListCom