import React from "react"
import ShopCart from "../ShopCart"
import "./ProductsStyle.css"

const Shoping = ({shopItems}) => { 

  return (
    <> 
      <section className='shop background'>
        <div className='containerShop d_flexShop1'>
          <div className='contentWidth'>
            <div className="ContainerProducts">
            <div className='product-content  gridProduct'>
              <ShopCart shopItems={shopItems} />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shoping
