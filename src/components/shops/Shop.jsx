import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"
import { Link } from "react-router-dom"


const Shop = ({shopItems}) => { 

  return (
    <>
      <section className='shop background'>
        <div className='containerShop d_flexShop'>

          <div className='contentWidth'>

            <div className='heading d_flex'>
              
              <div className='heading-middle'>
                <h2>Productos Destacados</h2>
                
              </div>

            </div>

           {/* Aca cuanta la cantidad de items y a cada uno le aplica el formato de shopsCart*/}

            <div className='product-content  grid1'>
              <ShopCart shopItems={shopItems} />
            </div>
            
           {/*--------------------------------------------------------------------------------*/}
           <div className='heading-right row '>
              <Link to='/Pages' ><a onClick={()=>{}} className='colorLetra'>Ver Mas</a></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
