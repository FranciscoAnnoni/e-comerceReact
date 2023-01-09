import React, { useState } from "react"
import Home from "../components/MainPage/Home"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/NuestrosClientes/Wrapper"

const Pages = ({shopItems}) => {

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
