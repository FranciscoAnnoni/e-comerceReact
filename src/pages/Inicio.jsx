import Home from "../components/Banner/Home"
import ProductosDestacados from "../components/shops/Inicio/ProductosDestacados"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/NuestrosClientes/Wrapper"

const Inicio = ({shopItems}) => {

  return (
    <>
      <Home/> 
      <ProductosDestacados shopItems={shopItems}/>
       {/* <Annocument />  */}
      <Wrapper />

    </>
  )
}

export default Inicio
