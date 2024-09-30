import React from "react"
import ProductoDestacadoIndiviual from "./ProductoDestacadoIndividual";
import { Link } from "react-router-dom"


const ProductosDestacados = ({shopItems}) => { 

  return (
    <>
      <section className='shop background-ProductosDestacados'>
        <div className='containerShop d_flexShop'>

          <div className='contentWidth'>

            <div className='heading d_flex'>
              
              <div className='heading-middle'>
                <h2>Productos Destacados</h2>
              
              </div>
            </div>

           {/* Aca cuanta la cantidad de items y a cada uno le aplica el formato de shopsCart*/}

            <div className='grid1'>
              <ProductoDestacadoIndiviual shopItems={shopItems} />
            </div>
            
           {/*--------------------------------------------------------------------------------*/}
           <div className='heading-right row '>
           <Link to='/productos-relojesPared'>
               <button className='colorLetra' type='button'>Ver Mas</button>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductosDestacados
