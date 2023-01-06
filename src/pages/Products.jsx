import React from "react"

import ShopProducts from  "../components/shops/Products/ShopProducts"
import Categories from "../components/shops/Products/categories/Categories"



const Pages = ({shopItems}) => {
  window.inicio = false;
  window.pages = true;
  window.trabajosRealizados = false;
  window.sobreNosotros =false;
  window.contacto = false;

  return (
    <>
      <Categories />
      <ShopProducts shopItems={(shopItems)}/>
      
    </>
  )
}

export default Pages
