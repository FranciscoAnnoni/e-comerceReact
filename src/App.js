import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Pages from "./pages/Pages"
import Footer from "./common/footer/Footer"
import Products from "./pages/Products"
import Navbar from "./common/header/Navbar"
import ScrollToTop from "./components/scrollToTop"

import Data from "./components/Data"
import Sdata from "./components/shops/Sdata"



function App() {

  //Productos de cosas randoms:
  const { productItems } = Data

  //Productos de Telefonos :
  const { shopItems } = Sdata


  return (
    <>
      <Router>
       <Navbar/>
        <Switch>
          <Route path='/' exact>
          <ScrollToTop />
            <Pages shopItems={productItems} /> {/*aca cambie los datos por otros datos del JSON y nos da otra info*/}
          </Route>
          <Route path='/productos' exact>
          <ScrollToTop />
            <Products shopItems={(shopItems)}/>
          </Route>
          <Route path='/trabajos' exact>
          <ScrollToTop />
            <Pages shopItems={shopItems}/>
          </Route>
          <Route path='/nosotros' exact>
          <ScrollToTop />
            <Pages shopItems={shopItems} />
          </Route>
          <ScrollToTop />
          <Route path='/contacto' exact>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
