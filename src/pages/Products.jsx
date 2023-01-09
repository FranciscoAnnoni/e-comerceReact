import React from "react"

import ShopProducts from  "../components/shops/Products/ShopProducts"
import Categories from "../components/shops/Products/categories/Categories"



const Products = ({shopItems}) => {
  return (
    <>
      <Categories />
      <ShopProducts shopItems={(shopItems)}/>
      
    </>
  )
}

export default Products
