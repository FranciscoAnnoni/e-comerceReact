import React from "react"

import NuestrosProductos from  "../components/shops/Products/NuestrosProductos"
import Categories from "../components/shops/Products/categories/Categories"



const Products = ({shopItems}) => {
  return (
    <>
      <Categories />
      <NuestrosProductos shopItems={(shopItems)}/>
    </>
  )
}

export default Products
