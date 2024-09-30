import React from "react"
import "./ProductoDestacado.css"
import { Link } from "react-router-dom"

const ProductoDestacadoIndiviual = ({ shopItems}) => {
  return (
    <>
      {shopItems.map((shopItem, index) => { // add a key prop
        return (
          <Link exact to={"/"+ shopItem.id} key={index}> {/* add a key prop */}
            <div className='boxProducto'>
              <div className='productoIndividual mtop'>
                <div className='img'>
                  <img src={"." + shopItem.cover} alt='' />
                  <div className='product-like'></div>
                </div>
                <div className="product-details">
                  <h3>{shopItem.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>${shopItem.price}.00</h4>
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

export default ProductoDestacadoIndiviual
