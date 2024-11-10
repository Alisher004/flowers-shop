import React,{useState, useEffect} from 'react'
import "./Banner.scss"
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import main from "../../assets/image/mian.png"

const API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"

function Banner() {
const [category,setCategory]  = useState([])

async function getCategory(){
    try{
const res = await axios.get(API);

setCategory(res.data.drinks)

console.log(res);

    }catch(error) {
        console.log(error);
        
    }
}

useEffect(() => {
    getCategory()
}, [])

  return (
<div className='banner container'>
    <div className='banner-sidebar'>
        <ul>
           
        {
            category.splice(0,9).map((item) => (
               <li key={item.idDrink}>{item.strDrink}</li>
            ))
        }      
      </ul>
    </div>
    <div className='banner-carousel'>
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img className='main-image' src={main} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img className='main-image' src={main} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img className='main-image' src={main} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
</div>
  )
}

export default Banner
