import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"
import { Link } from "react-router-dom"
import Relojes from "../Relojes.js"


const Shop = ({shopItems}) => { 


  return (
    <>
    
      <section className='shop background'>
        <div className='containerShop d_flexShop'>

          <div className='contentWidth'>

            <div className='heading d_flex'>
              
              <div className='heading-middle'>
                <h2>Nuestros Productos</h2>
                
              </div>

            </div>

           {/* Aca cuanta la cantidad de items y a cada uno le aplica el formato de shopsCart*/}

            <div className='product-content  grid1'>
              <ShopCart shopItems={shopItems} />
              <ShopCart shopItems={shopItems} />
            </div>
            
           {/*--------------------------------------------------------------------------------*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
