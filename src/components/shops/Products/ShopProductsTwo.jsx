
import React from "react"

const ShopCart = ({ shopItems}) => {
 
  return (
    <>
      {shopItems.map((shopItems) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>New</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <i className='fa-regular fa-heart'></i>
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
        )
      })}
    </>
  )
}

export default ShopCart
