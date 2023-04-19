
import React from "react"
import "./style.css"
import { Link } from "react-router-dom"


const ShopCart = ({ shopItems}) => {
  const location = window.location.pathname;

  function path(valor){
    if(valor == '/'){
      return "/productos"
    } else return valor
  }


  return (
    <>
      {shopItems.map((shopItems) => {
        return (
          <Link exact to={path(location) +"/"+ shopItems.id}>
          <div className='boxProduct'>
            <div className='product mtop'>

              <div className='img'>
                <span className='discount'>New</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                </div>
              </div>
              
            </div>
          </div>
          </Link>
        )
      })}
    </>
  )
}

export default ShopCart
