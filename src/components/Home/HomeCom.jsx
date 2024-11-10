import React, {useState, useEffect} from 'react'
import Banner from '../Banner/Banner'
import Product from '../Product/Product'
import apiClient from '../../axios/apiClient'
import "./Home.scss"
import axios from 'axios'

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement"

function HomeCom() {
const [products, setProducts] = useState([])

async function getProducts() {
  try{
const res = await axios.get(API)
setProducts(res.data)
console.log(res);

  }catch(error) {
    console.log(error);
    
  }
}

useEffect(() => {
  getProducts()
}, [])

  return (
    <div>
    <Banner />
    <div className='ali'>{
    products.map((item) =>(
      <Product key={item.id} data={item}/>
    ))}</div>
    </div>
  )
}

export default HomeCom
