import React from 'react';
import Home from "../components/shops/Inicio/Banner/Home";
import Wrapper from "../components/shops/Inicio/NuestrosClientes/Wrapper";
import ProductosDestacados from "../components/shops/Inicio/ProductosDestacados/ProductosDestacados";

const Inicio = ({ shopItems }) => {

  return (
    <> 
        <Home /> 
        <ProductosDestacados shopItems={shopItems} />
        {/* <Annocument />  */}
        <Wrapper />
    </>
  );
};

export default Inicio;