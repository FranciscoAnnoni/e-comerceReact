import React from "react"
import ProductoIndividual from "../ProductoIndividual"
import "./NuestrosProductos.css"

const Shop = ({shopItems}) => { 

  return (
    <>
    
      <section className='shop background'>
        <div className='containerShop d_flexShop1'>

          <div className='contentWidth'>
           
              <div className='heading-middle1'>
                <h2>Nuestros Productos</h2>
              </div>

           {/* Aca cuanta la cantidad de items y a cada uno le aplica el formato de shopsCart*/}
            <div className="ContainerProducts">
            <div className='product-content  gridProduct'>
              <ProductoIndividual shopItems={shopItems} />
            </div>
            </div>
           {/*--------------------------------------------------------------------------------*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
