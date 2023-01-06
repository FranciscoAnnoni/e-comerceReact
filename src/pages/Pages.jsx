import React, { useState } from "react"
import Home from "../components/MainPage/Home"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/NuestrosClientes/Wrapper"
import Search from "../common/header/Search"

const Pages = ({shopItems}) => {
  window.inicio = true;
  window.pages = false;
  window.trabajosRealizados = false;
  window.sobreNosotros =false;
  window.contacto = false;

  return (
    <>
      <Home/>
      <Shop shopItems={shopItems}/>
      <Annocument />
      <Wrapper />

    </>
  )
}

export default Pages
