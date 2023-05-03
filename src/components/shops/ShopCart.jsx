import React from "react"
import "./style.css"
import { Link } from "react-router-dom"

const ShopCart = ({ shopItems}) => {
  const location = window.location.pathname;

  function hayNumero(texto) {
    var expresion = /\d+/;
    return expresion.test(texto);
  }

  function path(valor){
    if(valor === '/'){
      return "/productos";
    } else if(hayNumero(valor)){
      return shopItems[0].path;
    } else return valor;
  }

  return (
    <>
      {shopItems.map((shopItem, index) => { // add a key prop
        return (
          <Link exact to={path(location) +"/"+ shopItem.id} key={index}> {/* add a key prop */}
            <div className='boxProduct'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>New</span>
                  <img src={"." + shopItem.cover} alt='' />
                  <div className='product-like'></div>
                </div>
                <div className='product-details'>
                  <h3>{shopItem.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${shopItem.price}.00 </h4>
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
