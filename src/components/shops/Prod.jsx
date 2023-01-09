
import React from "react"
import "./style.css"
import {useParams} from "react-router-dom"

const Prod = ({ shopItems}) => {

  const idValue = useParams().id;  
  const object = shopItems.find(({ id }) => id == idValue);
  return (
    <>
         <div className='boxProduct'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>New</span>

                <img src={"."+ object.cover} alt='' />


                <div className='product-like'>
                  <i className='fa-regular fa-heart'></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{object.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${object.price}.00 </h4>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Prod
