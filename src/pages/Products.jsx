import React from "react"

import ShopProducts from  "../components/shops/ShopProducts"
import Categories from "../components/MainPage/Categories"



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
